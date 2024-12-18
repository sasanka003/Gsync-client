import React, { useState } from "react";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="flex items-center bg-green rounded-md p-1 w-[210px]">
      <button
        className={`px-4 py-2 rounded-md ${
          activeTab === "general"
            ? "bg-fill text-green-700"
            : "bg-green-700 text-fill"
        }`}
        onClick={() => setActiveTab("general")}
      >
        General
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          activeTab === "advanced"
            ? "bg-fill text-green-700"
            : "bg-green-700 text-fill"
        }`}
        onClick={() => setActiveTab("advanced")}
      >
        Advanced
      </button>
    </div>
  );
};

export default TabComponent;
