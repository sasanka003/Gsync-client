import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface StatusCardProps {
  plantationName?: string;
  status?: string | number;
  requestDate?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  plantationName,
  status,
  requestDate: altText,
}) => {
  return (
    <Card className="p-0 mb-4 py-2 px-4 lg:w-[344px] h-[136px]">
      <div className="w-[344px]">
        <div className="text-h4 font-semibold">{plantationName}</div>
        <CardContent className="md:text-ui p-0 h-[36px]">{status}</CardContent>
      </div>
      <div className="flex items-center mt-4 text-muted-foreground">
        <div className="w-6 h-6 mr-2">
          <Calendar />
        </div>
        {altText && <span>Requested on {altText}</span>}
      </div>
    </Card>
  );
};

export default StatusCard;
