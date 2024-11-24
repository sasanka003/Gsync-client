"use client";
import React from "react";
import HelpRequest from "../components/Help-Requests";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function RequestPage() {
  return (
    <ContentLayout title="Community">
      <div>
        <HelpRequest
          requestId="0001"
          username="Username"
          userType="Gardener"
          date="06.06.2024"
          subject="Pest Identification Issue"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          imageUrl="/images/plantation.png"
        />
      </div>
    </ContentLayout>
  );
}
