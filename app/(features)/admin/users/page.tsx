import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import Users from '@/components/Users'


export default function RequestPage() {
  return (
    <ContentLayout title="Community">
      <div><Users /></div>
    </ContentLayout>
  );
}
