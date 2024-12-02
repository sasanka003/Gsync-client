import React from "react";
import PlantationRequests from "../components/PlantationRequests";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function RequestPage() {
  return (
    <ContentLayout title="Help Requests">
      <div>
        <PlantationRequests />
      </div>
    </ContentLayout>
  );
}
