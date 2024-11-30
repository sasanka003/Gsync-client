import React from "react";
import Users from "../components/Users";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function RequestPage() {
  return (
    <ContentLayout title="Community">
      <div>
        <Users />
      </div>
    </ContentLayout>
  );
}
