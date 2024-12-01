import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import PlantationApprovalForm from "../../components/PlantationApproval";

export default function RequestPage() {
  return (
    <ContentLayout title="Plantation Details">
      <div>
        <PlantationApprovalForm />
      </div>
    </ContentLayout>
  );
}
