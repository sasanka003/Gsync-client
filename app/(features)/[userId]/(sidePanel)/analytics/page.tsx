import React from "react";
import LineChart from "./components/LineChart"; 
import { ContentLayout } from "@/components/dashboard/content-layout";

const ChartInfo = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 15, 13, 20, 30, 25, 18],
        borderColor: "#23A662",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Dataset 2",
        data: [12, 10, 18, 25, 22, 15, 20],
        borderColor: "#116B40",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Dataset 3",
        data: [5, 7, 9, 14, 20, 30, 25],
        borderColor: "#0E462C",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
      {
        label: "Dataset 4",
        data: [5, 7, 9, 14, 20, 30, 25],
        borderColor: "#0E462C",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  return (
    <ContentLayout title="Analytics">
      <div className="h-screen flex justify-center gap-4 pt-10">
        <div className="flex flex-col gap-4">
          <LineChart factor="Temperature" value={24} unit="°C" data={data} />
          <LineChart factor="O2 Level" value={24} unit="ppm" data={data} />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
          <LineChart factor="Humidity" value={24} unit="%" data={data} />
          <LineChart factor="CO2 Level" value={18} unit="ppm" data={data} />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ChartInfo;