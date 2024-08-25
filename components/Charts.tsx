"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FactorCardProps {
  factor: string; 
  value: number;   
  unit?: string;
  timeFrame?: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      borderWidth?: number;
    }[];
  };
}

const FactorCard: React.FC<FactorCardProps> = ({
  factor,
  value,
  unit = "°C",
  timeFrame = "This Week",
  data,
}) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeFrame);
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
    },
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeFrameChange = (timeFrame: string) => {
    setSelectedTimeFrame(timeFrame);
    setIsOpen(false);
  };

  return (
    <div className="border border-green-500 rounded-lg p-4 w-[528px]">
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg font-semibold">{factor}</div>
        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="text-sm text-gray-500 flex items-center"
          >
            {selectedTimeFrame}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg">
              {["Today", "This Week", "This Month"].map((time) => (
                <li
                  key={time}
                  onClick={() => handleTimeFrameChange(time)}
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-sm text-gray-700"
                >
                  {time}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="text-green-700 text-4xl font-bold mb-2">
        {value}
        {unit}
      </div>
      <div className="h-32">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default FactorCard;
