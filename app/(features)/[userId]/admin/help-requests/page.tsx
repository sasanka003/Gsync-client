"use client";
import React from "react";
import HelpRequest1 from "../components/Help-Requests1";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function RequestPage() {
  return (
    <ContentLayout title="Help Requests">
      <div>
        <HelpRequest1 />
      </div>
    </ContentLayout>
  );
}
