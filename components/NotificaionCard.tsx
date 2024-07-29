"use client";

import React, { useState } from "react";
import { Switch } from "./ui/switch";

const NotificationCard = () => {
  const [systemNotifications, setSystemNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

  return (
    <div className="p-4 border border-outline rounded-md w-[416px]">
      <div className="text-h3 mb-4">Notifications</div>

      <div>
        <div className="flex items-center justify-between">
          <div className="text-lead text-common">System Notifications</div>
          <div>
            <Switch
              checked={systemNotifications}
              onCheckedChange={setSystemNotifications}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                systemNotifications ? "bg-text" : "bg-fill"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-fill rounded-full transition-transform ${
                  systemNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </Switch>
          </div>
        </div>
        <div className="text-p text-grey">
          Allow Gsync to show notifications on your system.
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="text-lead text-common">Email Notifications</div>
          <div>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                emailNotifications ? "bg-text" : "bg-fill"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  emailNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </Switch>
          </div>
        </div>
        <div className="text-p text-grey">
          Allow Gsync to send notifications to your email.
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
