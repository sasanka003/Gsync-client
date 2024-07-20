import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

interface PlantBedCardProps {
  title?: string;
  content?: string | number;
  altText?: string;
  icon?: React.ReactNode;
}

const PlantCard: React.FC<PlantBedCardProps> = ({
  title,
  content,
  altText,
  icon,
}) => {
  return (
    <Card className="p-0 mb-4 py-2 px-4 lg:w-[344px] h-[136px]">
      <div className="w-[312px]">
        <CardTitle className="md:text-h2 text-foreground h-[36px]">{title}</CardTitle>
        <CardContent className="md:text-h2 p-0 h-[36px]">{content}</CardContent>
      </div>
      <div className="flex items-center mt-4 text-muted-foreground">
        {icon && <div className="w-6 h-6 mr-2">{icon}</div>}
        {altText && <span>{altText}</span>}
      </div>
    </Card>
  );
};

export default PlantCard;
