"use client";

import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { useParams } from "next/navigation";
import { useGetUserPlantationsQuery } from "@/app/services/plantSlice";
import { UserPlantation } from "@/types/plantations";
import RequestsPending from "./Components/RequestPending";
import PaymentPending from "./Components/PaymentPending";
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
      // requestDate: new Date().toLocaleDateString("en-GB"),
    }));

    const hasUnverifiedPlantations = plantations.some((p) => !p.verified);
    const hasVerifiedUnpaidPlantations = plantations.some(
      (p) => p.verified && !p.payment_status
    );
    const hasVerifiedPaidPlantations = plantations.some(
      (p) => p.verified && p.payment_status
    );

    if (hasUnverifiedPlantations) {
      return <RequestsPending plantations={statusCardsData} />;
    }

    if (hasVerifiedUnpaidPlantations) {
      return <PaymentPending plantations={statusCardsData} />;
    }

    if (hasVerifiedPaidPlantations) {
      // Get the first verified and paid plantation for dashboard display
      const activePlantation = plantations.find(
        (p) => p.verified && p.payment_status
      );

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
