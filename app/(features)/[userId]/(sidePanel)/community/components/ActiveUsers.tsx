import React from "react";
import { Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ActiveUsers = () => {
  const users = [
    {
      name: "Michelle Starc",
      role: "Small-Scale Gardener",
      avatar: "",
    },
    {
      name: "Kulith Vinwara",
      role: "Enterprise Gardener",
      avatar: "",
    },
    {
      name: "Lionel Messi",
      role: "Small-Scale Gardener",
      avatar: "",
    },
    {
      name: "Waruna Parakrama",
      role: "Enterprise Gardener",
      avatar: "",
    },
  ];

  return (
    <div className="border border-text rounded-lg p-4 w-[344px]">
      <h2 className="text-h2 mb-4 text-common">Most Active Users</h2>
      {users.map((user, index) => (
        <div key={index} className="flex items-center mb-4">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="User profile"
              className="w-10 h-10 rounded-full mr-4"
            />
          ) : (
            <Avatar className="h-10 w-10 mr-4">
              <AvatarImage src="#" alt="Avatar" />
              <AvatarFallback className="bg-gray-300 transparent text-common font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
          <div className="flex-1">
            <div className="font-semibold text-large text-common">
              {user.name}
            </div>
            <div className="flex justify-between">
              <div className="text-detail text-grey">{user.role}</div>
              <a href="#" className="text-text text-detail underline">
                View Posts
              </a>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="flex items-center mt-4">
<Calendar className="w-5 h-5 mr-2 text-grey" />
        <span className="text-muted-foreground text-p">Last Updated Yesterday</span>
      </div> */}
    </div>
  );
};

export default ActiveUsers;
