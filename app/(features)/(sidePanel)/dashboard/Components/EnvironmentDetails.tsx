import * as React from "react";
import { Clock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface EnvironmentalCardProps {
  title: string;
  location: string;
  temperature: string;
  humidity: string;
  co2Levels: string;
  soilMoisture: string;
  lightLevels: string;
  lastChecked: string;
}

const EnvironmentalCard: React.FC<EnvironmentalCardProps> = ({
  title,
  location,
  temperature,
  humidity,
  co2Levels,
  soilMoisture,
  lightLevels,
  lastChecked,
}) => {
  return (
    <Card className="p-4 lg:min-w-[344px]">
      <CardHeader className="p-0">
        <div className="flex gap-20">
          <div className="text-h2 text-common">{title}</div>
          <CardDescription className="text-p-ui-medium mt-2 ">
            {location}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col space-y-2 flex-1.5">
            <span className="text-lead">Temperature</span>
            <span className="text-lead">Humidity</span>
            <span className="text-lead">CO2 levels</span>
            <span className="text-lead">Soil Moisture</span>
            <span className="text-lead">Light Levels</span>
          </div>
          <div className="flex flex-col space-y-2 text-h4 items-end">
            <div>{temperature}</div>
            <div>{humidity}</div>
            <div>{co2Levels}</div>
            <div>{soilMoisture}</div>
            <div>{lightLevels}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <Clock size={24} className="text-muted-foreground" />
            <div className="text-muted-foreground text-p ml-2">
              {lastChecked}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EnvironmentalCard;
