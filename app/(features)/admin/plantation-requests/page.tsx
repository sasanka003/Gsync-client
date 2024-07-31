import { ContentLayout } from "@/components/dashboard copy/content-layout";
import React from "react";
import SystemAdminDashboard from "../components/PlantationRequests";

export default function RequestPage() {
  return (
    <ContentLayout title="Community">
      <div>
        <SystemAdminDashboard />
      </div>
    </ContentLayout>
  );
}
