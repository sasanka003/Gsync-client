"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { CheckIcon } from "../../../../components/Icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Subscription } from "@/types/plantations";
import { useGetUserPlantationsQuery } from "@/app/services/plantSlice";

interface PlanCardProps {
  title: string;
  features: string[];
  availableFeatures: string[];
  price: string;
  icon: React.ReactNode;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  features,
  availableFeatures,
  price,
  icon,
}) => {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get user plantations query
  const { data: userPlantations = [], isLoading: isPlantationsLoading } =
    useGetUserPlantationsQuery(user?.id ?? "", {
      skip: !user,
    });

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    };
    checkUser();
  }, []);

  // Determine current user's subscription and plantation count
  const currentSubscription = user
    ? userPlantations[0]?.subscription ?? Subscription.Basic
    : Subscription.Basic;
  const plantationCount = userPlantations.length;

  // Subscription hierarchy
  const subscriptionHierarchy = {
    [Subscription.Basic]: 0,
    [Subscription.Gardener]: 1,
    [Subscription.Enterprise]: 2,
  };

  // Determine if plan selection is allowed
  const canSelectPlan = () => {
    // Not authenticated
    if (!user) return false;

    // If any plantation is waiting for verification, block all selections
    const hasUnverifiedPlantation = userPlantations.some((p) => !p.verified);
    if (hasUnverifiedPlantation) return false;

    // Prevent downgrade
    if (
      subscriptionHierarchy[title as Subscription] <
      subscriptionHierarchy[currentSubscription]
    ) {
      return false;
    }

    // Basic users can upgrade
    if (currentSubscription === Subscription.Basic) {
      return true;
    }

    // Gardener users can only upgrade to Enterprise
    if (currentSubscription === Subscription.Gardener) {
      return title === Subscription.Enterprise;
    }

    // Enterprise users can't change
    if (currentSubscription === Subscription.Enterprise) {
      return false;
    }

    return false;
  };

  // Determine if plan is already subscribed
  const isCurrentPlan = user ? title === currentSubscription : false;

  // Determine plan selection restrictions
  const isPlanSelectionDisabled = () => {
    // Not authenticated
    if (!user) return false;

    // Waiting for verification
    if (userPlantations.some((p) => !p.verified)) return true;

    // Already at max plantations
    if (
      (currentSubscription === Subscription.Basic && plantationCount > 0) ||
      (currentSubscription === Subscription.Gardener && plantationCount >= 1) ||
      (currentSubscription === Subscription.Enterprise && plantationCount >= 3)
    )
      return true;

    // Prevent downgrade or lateral moves
    return !canSelectPlan();
  };

  const handlePlanSelect = async () => {
    // Not authenticated - redirect to login
    if (!user) {
      router.push("/login");
      return;
    }

    // Determine navigation based on plan
    if (title === Subscription.Basic) {
      router.push(`/${user.id}/dashboard`);
    } else {
      router.push(`/${user.id}/plantation/registration?plan=${title}`);
    }
  };

  // Determine button and status text
  const getButtonText = () => {
    if (isLoading || isPlantationsLoading) return "Loading...";
    return "Choose Plan";
  };

  const getButtonStatusText = () => {
    if (isLoading || isPlantationsLoading) return null;

    if (!user) return null;

    // Waiting for verification
    if (userPlantations.some((p) => !p.verified)) {
      return "Waiting for plantation verification";
    }

    // Already subscribed to this plan
    if (isCurrentPlan) {
      return "You are currently on this plan";
    }

    // Max plantations reached
    if (
      (currentSubscription === Subscription.Basic && plantationCount > 0) ||
      (currentSubscription === Subscription.Gardener && plantationCount >= 1) ||
      (currentSubscription === Subscription.Enterprise && plantationCount >= 3)
    ) {
      return "Maximum plantations reached for your current plan";
    }

    // Downgrade not allowed
    if (
      subscriptionHierarchy[title as Subscription] <
      subscriptionHierarchy[currentSubscription]
    ) {
      return "Cannot downgrade plan";
    }

    return null;
  };

  return (
    <Card className="flex flex-col p-4 gap-6 w-[304px]">
      <CardHeader className="flex flex-row justify-between items-center p-0">
        <div className="flex justify-between items-center gap-2">
          {icon && <div className="icon">{icon}</div>}
          <CardTitle className="text-h2">{title}</CardTitle>
        </div>
        <p className="text-h3 font-semibold">{price}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-0 items-center">
        {availableFeatures.map((feature) => {
          const isAvailable = features.includes(feature);
          const color = isAvailable ? "var(--common)" : "var(--grey)";
          return (
            <div className="flex gap-2" key={feature}>
              <CheckIcon color={color} />
              <p
                className={`text-p ${
                  isAvailable ? "text-common" : "text-grey"
                }`}
              >
                {feature}
              </p>
            </div>
          );
        })}
        <Button
          className="w-28 mt-6"
          onClick={handlePlanSelect}
          disabled={isPlanSelectionDisabled()}
        >
          {getButtonText()}
        </Button>
        {getButtonStatusText() && (
          <p className="text-sm text-gray-500 mt-2 text-center">
            {getButtonStatusText()}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default PlanCard;
