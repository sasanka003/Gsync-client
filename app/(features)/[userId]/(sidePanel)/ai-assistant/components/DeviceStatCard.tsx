"use client";

import React from "react";

interface DeviceStatCardProps {
  deviceName: string;
  status: string;
  description: string;
  stats: {
    temperature: string;
    humidity: string;
    oxygenLevel: string;
    carbonDioxideLevel: string;
  };
}

const DeviceStatCard: React.FC<DeviceStatCardProps> = ({
  deviceName,
  status,
  description,
  stats,
}) => {
  const statusColor = status === "Online" ? "text-green-600" : "text-red-600";

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md w-[400px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{deviceName}</h3>
        <div className={`text-sm font-medium ${statusColor}`}>
          Status: {status}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="grid grid-cols-4 text-center text-gray-700 text-sm">
        <div>
          <span className="block text-xl font-bold">{stats.temperature}</span>
          Temp
        </div>
        <div>
          <span className="block text-xl font-bold">{stats.humidity}</span>
          Humidity
        </div>
        <div>
          <span className="block text-xl font-bold">{stats.oxygenLevel}</span>
          O₂ Level
        </div>
        <div>
          <span className="block text-xl font-bold">
            {stats.carbonDioxideLevel}
          </span>
          CO₂ Level
        </div>
      </div>
    </div>
  );
};

export default DeviceStatCard;
