import PlantCard from "@/components/PlantCard";
import React from "react";
import EnvironmentDetails from "./EnvironmentDetails";
import SuggestedActionCard from "./SuggestedActions";
import CameraFootageCard from "./CameraFootage";
import IoTDevicesCard from "./IoTDevices";
import { Clock, Leaf } from "lucide-react";
import { UserPlantation } from "@/types/plantations";

interface PlantationDashboardProps {
  plantationData: UserPlantation | undefined;
}

const PlantationDashboard = ({ plantationData }: PlantationDashboardProps) => {
  // const plantationData = {
  //   title: "Plant Type",
  //   content: "Bell Pepper",
  //   altText: "Plantation added on 07.08.2023",
  //   icon: <Leaf />,
  // };

  const plantatainHealthData = {
    title: "Plantation Health",
    content: "Good",
    altText: "Last checked 1 hour ago",
    icon: <Clock />,
  };

  const plantationInfestsData = {
    title: "Pest Infests",
    content: "None",
    altText: "Last checked 30 minutes ago",
    icon: <Clock />,
  };

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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 ml-4 mb-10">
      <div className="flex space-x-4 col-span-1 lg:col-span-2">
        <PlantCard
          title={plantationData?.name}
          content={plantationData?.type || "N/A"}
          altText=""
          icon={<Leaf />}
        />
        <PlantCard
          title={plantatainHealthData.title}
          content={plantatainHealthData.content}
          altText={plantatainHealthData.altText}
          icon={plantatainHealthData.icon}
        />
        <PlantCard
          title={plantationInfestsData.title}
          content={plantationInfestsData.content}
          altText={plantationInfestsData.altText}
          icon={plantationInfestsData.icon}
        />
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
      </div>
    </div>
  );
};

export default PlantationDashboard;
