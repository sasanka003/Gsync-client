import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface PlanCardProps {
  title?: string;
  description?: string;
  price?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, description, price }) => {
  return (
    <Card className="p-4 gap-6">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
