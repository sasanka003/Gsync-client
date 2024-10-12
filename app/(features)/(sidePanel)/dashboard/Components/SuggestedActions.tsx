import * as React from "react";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SuggestedActionCardProps {
  actions: { date: string; title: string; daysLeft: number }[];
  lastUpdated: string;
}

const SuggestedActionCard: React.FC<SuggestedActionCardProps> = ({
  actions,
  lastUpdated,
}) => {
  return (
    <Card className="p-4 lg:min-w-[344px]">
      <div className="p-0 mb-4">
        <div className="text-h2 text-common">Suggested Actions</div>
        <div className="text-p text-grey mt-0">
          Based on your latest activities
        </div>
      </div>

      <CardContent className="p-0">
        <div className="space-y-4">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex-1">
                <div className="text-lead">{action.date}</div>
                <div className="text-h4">{action.title}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <button className="text-p">Add Reminder</button>
                <div className="text-p text-muted-foreground">
                  {action.daysLeft} days left
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <div className="pt-4">
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

export default SuggestedActionCard;
