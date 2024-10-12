import * as React from "react";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Device {
  id: string;
  name: string;
  status: string;
}

interface IoTDevicesCardProps {
  totalDevices: number;
  devices: Device[];
  lastUpdated: string;
}

const IoTDevicesCard: React.FC<IoTDevicesCardProps> = ({
  totalDevices,
  devices,
  lastUpdated,
}) => {
  return (
    <Card className="p-4 lg:min-w-[344px]">
      <div className="p-0 mb-4">
        <div className="text-h2 text-common">IoT Devices</div>
        <div className="text-p text-muted-foreground mt-0 flex items-center">
          Total Devices
          <div className="text-green text-p-ui-medium ml-2">{totalDevices}</div>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-h4 text-common">{device.name}</div>
                  <div
                    className={`text-p flex ${
                      device.status === "Online"
                        ? "text-green-600"
                        : "text-destructive"
                    }`}
                  >
                    <div className="text-muted-foreground mr-1">Status : </div>{" "}
                    {device.status}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  {device.status === "Online" ? (
                    <button className="text-green-600">turn off</button>
                  ) : (
                    <button className="text-green-600">turn on</button>
                  )}
                  <button className="text-destructive ml-3">restart</button>
                  <div className="text-p text-muted-foreground mt-1">
                    Check Signal
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="text-p underline mt-5">Check All Devices</div>

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

export default IoTDevicesCard;
