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
  const [userSubscription, setUserSubscription] = useState<Subscription | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("subscription")
          .eq("id", user.id)
          .single();
        if (!error) {
          setUserSubscription(profile?.subscription ?? Subscription.Basic);
        }
      }
      setUser(user);
      setIsLoading(false);
    };
    checkUser();
  }, []);

  // Determine if plan selection is allowed
  const isPlanSelectionAllowed = () => {
    // Not authenticated
    if (!user) return false;

    // No subscription
    if (!userSubscription) return true;

    // Subscribed to the same plan
    return userSubscription !== title;
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
    if (isLoading) return "Loading...";
    return "Choose Plan";
  };

  const getButtonStatusText = () => {
    if (isLoading) return null;

    if (!user) return null;

    // Subscribed to the same plan
    if (userSubscription === title) {
      return "You are currently on this plan";
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
          disabled={!isPlanSelectionAllowed()}
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
