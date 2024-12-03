"use client";

import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { useParams } from "next/navigation";
import { useGetUserPlantationsQuery } from "@/app/services/plantSlice";
import { UserPlantation } from "@/types/plantations";
import RequestsPending from "./Components/RequestPending";
import PlantationDashboard from "./Components/PlantationDashboard";

const PlantationInfo = () => {
  const params = useParams();
  const userId = params.userId as string;

  const {
    data: plantations,
    isLoading,
    error,
  } = useGetUserPlantationsQuery(userId);

  if (isLoading) {
    return (
      <ContentLayout title="Dashboard">
        <div className="flex justify-center items-center h-full">
          Loading...
        </div>
      </ContentLayout>
    );
  }

  if (error) {
    return (
      <ContentLayout title="Dashboard">
        <div className="flex justify-center items-center h-full">
          Error loading plantations
        </div>
      </ContentLayout>
    );
  }

  const renderContent = () => {
    if (!plantations || plantations.length === 0) {
      return (
        <div className="flex justify-center items-center h-full">
          No plantations found
        </div>
      );
    }

    const statusCardsData = plantations.map((plantation: UserPlantation) => ({
      plantationName: plantation.name,
      status: plantation.verified ? "Approved" : "In Review",
    }));

    const hasUnverifiedPlantations = plantations.some((p) => !p.verified);
    const hasVerifiedPlantations = plantations.some((p) => p.verified);

    if (hasUnverifiedPlantations) {
      return <RequestsPending plantations={statusCardsData} />;
    }

    if (hasVerifiedPlantations) {
      // Get the first verified plantation for dashboard display
      const activePlantation = plantations.find((p) => p.verified);

      return <PlantationDashboard plantationData={activePlantation} />;
    }

    return (
      <div className="flex justify-center items-center h-full">
        No active plantations found
      </div>
    );
  };

  return <ContentLayout title="Dashboard">{renderContent()}</ContentLayout>;
};

export default PlantationInfo;
