import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckIcon } from "./Icons";

interface PlanCardProps {
  title?: string;
  features?: string[];
  price?: string;
  icon: React.ReactNode;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  features,
  price,
  icon,
}) => {
  return (
    <Card className="flex flex-col p-4 gap-6 w-[304px]">
      <CardHeader className="flex flex-row justify-between items-center p-0">
        <div className="flex justify-between items-center gap-2">
          {icon && <div className="icon">{icon}</div>}
          <CardTitle className="text-h2">{title}</CardTitle>
        </div>
        <p className="text-h3 font-semibold">{price}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-0">
        {features?.map((feature) => (
          <div className="flex gap-2">
            <CheckIcon />
            <p className="text-common">{feature}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlanCard;
