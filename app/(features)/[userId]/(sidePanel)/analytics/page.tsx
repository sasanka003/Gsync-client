'use client';
import React from "react";
import LineChart from "./components/LineChart";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { useGetSensorDataQuery } from "@/app/services/sensorDetailSlice";

const ChartInfo = () => {
  const { data: sensorData, isLoading, isError } = useGetSensorDataQuery({
    sensorId: 234,
    time_period: "last_week",
    limit: 100,
    offset: 0,
  });

  console.log("Fetched Sensor Data:", sensorData);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !sensorData) return <p>Error fetching data</p>;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const last7DaysData = sensorData.slice(-7);
  const labels = daysOfWeek;

  const temperatureData = last7DaysData.map((item) => item.temperature);
  const co2Data = last7DaysData.map((item) => item.co2_level);
  const nh3Data = last7DaysData.map((item) => item.nh3_level);
  const humidityData = last7DaysData.map((item) => item.humidity);

  interface SensorData {
    created_at: string;
    temperature: number;
    co2_level: number;
    nh3_level: number;
    humidity: number;
  }

  interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  }

  const chartData = (
    label: string, 
    data: number[], 
    borderColor: string, 
    backgroundColor: string
  ): ChartData => ({
    labels,
    datasets: [
      {
        label,
        data,
        borderColor,
        backgroundColor,
      },
    ],
  });

  return (
    <ContentLayout title="Analytics">
      <div className="h-screen flex justify-center gap-4 pt-10">
        <div className="flex flex-col gap-4">
          <LineChart
            factor="Temperature"
            value={temperatureData[temperatureData.length - 1]}
            unit="°C"
            data={chartData(
              "Temperature",
              temperatureData,
              "#23A662",
              "rgba(255, 99, 132, 0.2)"
            )}
          />
          <LineChart
            factor="NH₃ Level"
            value={nh3Data[nh3Data.length - 1]}
            unit="ppm"
            data={chartData(
              "NH₃ Level",
              nh3Data,
              "#116B40",
              "rgba(54, 162, 235, 0.2)"
            )}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <LineChart
              factor="Humidity"
              value={humidityData[humidityData.length - 1]}
              unit="%"
              data={chartData(
                "Humidity",
                humidityData,
                "#0E462C",
                "rgba(153, 102, 255, 0.2)"
              )}
            />
            <LineChart
              factor="CO₂ Level"
              value={co2Data[co2Data.length - 1]}
              unit="ppm"
              data={chartData(
                "CO₂ Level",
                co2Data,
                "#F56C42",
                "rgba(255, 206, 86, 0.2)"
              )}
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ChartInfo;
