"use client";

import React from "react";

interface PlantImageCardProps {
  plantType: string;
  imageUrl: string;
  description: string;
  timestamp: string;
}

const PlantImageCard: React.FC<PlantImageCardProps> = ({
  plantType,
  imageUrl,
  description,
  timestamp,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md w-[400px]">
      <h3 className="font-semibold text-lg text-emerald-950 mb-2">
        Following is a latest image of your {plantType} plants.
      </h3>
      <div className="flex items-start">
        <img
          src={imageUrl}
          alt={`Image of ${plantType}`}
          className="w-36 h-36 object-cover rounded-md mr-4"
        />
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex items-center text-gray-500 text-sm mt-2">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V11a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
        Image taken at: {timestamp}
      </div>
    </div>
  );
};

export default PlantImageCard;
