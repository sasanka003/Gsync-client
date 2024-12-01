import * as React from "react";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PlantReqCardProps {
  requests: {
    type: string;
    location: string;
    linkText: string;
    date: string;
  }[];
  status: string;
  lastUpdated: string;
}

const PlantReqCard: React.FC<PlantReqCardProps> = ({
  requests,
  status,
  lastUpdated,
}) => {
  return (
    <Card className="p-4 border rounded-md lg:min-w-[344px]">
      {/* Header */}
      <div className="p-0 mb-4">
        <div className="text-h2 text-common">Plantation Requests</div>
        <div className="text-p text-muted-foreground mt-0">{status}</div>
      </div>

      {/* Request List */}
      <CardContent className="p-0 space-y-4">
        {requests.map((request, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2 last:border-b-0"
          >
            <div className="flex-1">
              <div className="text-h4">{request.type}</div>
              <div className="text-p text-green">{request.location}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <button className="text-p underline text-blue-600 hover:text-blue-800">
                {request.linkText}
              </button>
              <div className="text-p text-muted-foreground">{request.date}</div>
            </div>
          </div>
        ))}
      </CardContent>

      {/* Footer */}
      <div className="pt-4 flex items-center">
        <Clock size={20} className="text-muted-foreground" />
        <div className="text-muted-foreground text-p ml-2">
          Last updated {lastUpdated}
        </div>
      </div>
    </Card>
  );
};

export default PlantReqCard;
