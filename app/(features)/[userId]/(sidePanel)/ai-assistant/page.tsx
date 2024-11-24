import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import ChatUI from "./components/ChatUI";

export default function chat() {
  return (
    <ContentLayout title="AI Assistant">
      <ChatUI />
    </ContentLayout>
  );
}
