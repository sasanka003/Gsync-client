import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Calendar } from "lucide-react";

interface PlantBedCardProps {
  title?: string;
  content?: string | number;
  altText?: string;
}

const PlantCard: React.FC<PlantBedCardProps> = ({ title, content, altText }) => {
  return (
    <Card className="p-0 mb-4 py-2 px-4 w-[344px] h-[136px]">
    <div className="w-[312px]">
     <CardTitle className="text-h2 h-[36px]">{title}</CardTitle>
     <CardContent className="text-h2 p-0 h-[36px]">{content}</CardContent>
    </div>
      <div className="flex items-center mt-4">
        <Calendar className="w-6 h-6 mr-2" />
        {altText && <span><p>{altText}</p></span>}
      </div>
    </Card>
  );
};

export default PlantCard;
