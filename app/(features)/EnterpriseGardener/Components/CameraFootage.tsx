import * as React from "react";
import { Clock } from "lucide-react";
import plantation from "../../../../assets/images/plantation.png";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../../../../components/ui/card";

interface CameraFootageCardProps {
  cameraTitle: string;
  cameraLocation: string;
  switchCamera: string;
  imageUrl: string;
  lastUpdated: string;
}

const CameraFootageCard: React.FC<CameraFootageCardProps> = ({
  cameraTitle,
  cameraLocation,
  switchCamera,
  imageUrl,
  lastUpdated,
}) => {
  return (
    <Card className="lg:max-w-[344px] p-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-h2 text-common">{cameraTitle}</div>
        </div>
        <div className="flex space-x-28 mt-1">
        <div className="text-p text-muted-foreground mr-4">{cameraLocation}</div>
        <div className="text-p underline ml-2">{switchCamera}</div>
        </div>
      </div>

      <div>
        <div className="my-4">
          <Image
            src="/images/plantation.png"
            width={312}
            height={192}
            alt="plantation Image"
            className=""
          />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <Clock size={24} className="text-muted-foreground" />
          <div className="text-muted-foreground text-p ml-2">
            Last updated {lastUpdated}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CameraFootageCard;
