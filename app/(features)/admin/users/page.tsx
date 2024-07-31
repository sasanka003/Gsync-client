import { ContentLayout } from "@/components/dashboard copy/content-layout";
import React from "react";
import Users from "../components/Users";

export default function RequestPage() {
  return (
    <ContentLayout title="Community">
      <div>
        <Users />
      </div>
    </ContentLayout>
  );
}
