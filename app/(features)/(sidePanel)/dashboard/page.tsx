import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import PlantCard from "@/components/PlantCard";
import { Clock, Leaf } from "lucide-react";
import EnvironmentDetails from "./Components/EnvironmentDetails";
import SuggestedActionCard from "./Components/SuggestedActions";
import CameraFootageCard from "./Components/CameraFootage";
import IoTDevicesCard from "./Components/IoTDevices";

const PlantationInfo = () => {
  const plantationData = [
    {
      title: "Plant Type",
      content: "Bell Pepper",
      altText: "Plantation added on 07.08.2023",
      icon: <Leaf />,
    },
    {
      title: "Plantation Health",
      content: "Good",
      altText: "Last checked 1 hour ago",
      icon: <Clock />,
    },
    {
      title: "Pest Infests",
      content: "None",
      altText: "Last checked 30 minutes ago",
      icon: <Clock />,
    },
  ];

  const environmentalData = {
    title: "Environment",
    location: "Outside",
    temperature: "23ºC",
    humidity: "16%",
    co2Levels: "Medium",
    soilMoisture: "12%",
    lightLevels: "Low",
    lastChecked: "Last checked 2 hours ago",
  };

  const actions = [
    { date: "27.07.2024", title: "1st Wave Harvest", daysLeft: 21 },
    { date: "29.07.2024", title: "Soil change", daysLeft: 23 },
  ];

  const cameraFootageData = {
    cameraTitle: "Camera Footages",
    cameraLocation: "Camera 01",
    switchCamera: "Switch Camera",
    imageUrl: "/path/to/image.png",
    lastUpdated: "1 hour ago",
  };

  const devices = [
    { id: "1", name: "Device 01", status: "Online" },
    { id: "2", name: "Device 02", status: "Offline" },
  ];

  const wateringSystemData = {
    title: "AI Assistant",
    altText: "Last prompt 1 hour ago",
    icon: <Clock />,
  };
  

  return (
    <ContentLayout title="Dashboard">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 ml-4 mb-10">
        <div className="flex space-x-4 col-span-1 lg:col-span-2">
          {plantationData.map((data, index) => (
            <PlantCard
              key={index}
              title={data.title}
              content={data.content}
              altText={data.altText}
              icon={data.icon}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <EnvironmentDetails {...environmentalData} />
          <SuggestedActionCard actions={actions} lastUpdated="1 hour ago" />
        </div>
        <div className="col-span-1 lg:col-span-2 flex space-x-4">
          <CameraFootageCard {...cameraFootageData} />
          <IoTDevicesCard
            totalDevices={devices.length}
            devices={devices}
            lastUpdated="1 hour ago"
          />
          <PlantCard {...wateringSystemData} />
        </div>
      </div>
    </ContentLayout>
  );
};

export default PlantationInfo;
