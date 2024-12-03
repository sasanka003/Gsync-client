"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { CheckIcon } from "../../../../components/Icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PlanCardProps {
  title?: string;
  features?: string[];
  availableFeatures?: string[];
  price?: string;
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
  const handlePlanSelect = (plan: string) => {
    if (plan === "Basic") {
      router.push("/dashboard");
    } else {
      router.push(`/plantation/registration?plan=${plan}`);
    }
  };
  return (
    <Card className="flex flex-col p-4 gap-6 w-[304px]">
      <CardHeader className="grid justify-between p-0">
        <div className="flex items-start gap-2">
          {icon && <div className="icon">{icon}</div>}
          <CardTitle className="text-h2">{title}</CardTitle>
        </div>
        <p className="text-h5 font-medium text-gray-600">{price}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-0 items-center">
        {availableFeatures?.map((feature) => {
          const isAvailable = features?.includes(feature);
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
        <Button className="w-28 mt-6" onClick={() => handlePlanSelect(title!)}>
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
