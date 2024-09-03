import React from "react";
import { Calendar } from "lucide-react";

const ActiveUsers = () => {
  const users = [
    { name: "Waruna Parackkrama", role: "Small-Scale Gardener" },
    { name: "Waruna Parackkrama", role: "Small-Scale Gardener" },
    { name: "Waruna Parackkrama", role: "Small-Scale Gardener" },
    { name: "Waruna Parackkrama", role: "Small-Scale Gardener" },
    { name: "Waruna Parackkrama", role: "Small-Scale Gardener" },
  ];

  return (
    <div className="border border-text rounded-lg p-4 w-[344px]">
      <h2 className="text-h2 mb-4 text-common">Most Active Users</h2>
      {users.map((user, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            src="/images/Avatar.png"
            alt="User profile"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex-1">
            <div className="font-semibold text-large text-common">{user.name}</div>
            <div className="flex justify-between">
            <div className="text-detail text-grey">{user.role}</div>
             <a href="#" className="text-text text-detail underline">
            View Posts
          </a>
          </div>
          </div>
         
        </div>
      ))}
      <div className="flex items-center mt-4">
<Calendar className="w-5 h-5 mr-2 text-grey" />
        <span className="text-muted-foreground text-p">Alternate Text</span>
      </div>
    </div>
  );
};

export default ActiveUsers;
