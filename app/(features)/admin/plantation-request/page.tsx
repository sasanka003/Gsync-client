import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import SystemAdminDashboard from '@/components/PlantationRequest'


export default function RequestPage() {
  return (
    <ContentLayout title="Community">
      <div><SystemAdminDashboard /></div>
    </ContentLayout>
  );
}
