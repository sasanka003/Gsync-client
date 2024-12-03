import React from "react";
import HelpRequestTable from "../components/HelpRequests-Table";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function RequestPage() {
  return (
    <ContentLayout title="Help Requests">
      <div>
        <HelpRequestTable />
      </div>
    </ContentLayout>
  );
}
