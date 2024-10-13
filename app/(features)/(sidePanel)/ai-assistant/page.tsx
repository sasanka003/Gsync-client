"use client";

import { ContentLayout } from "@/components/dashboard/content-layout";
import ChatUI from "@/app/(features)/(sidePanel)/ai-assistant/components/ChatUI";

export default function chat() {
 return (
    <ContentLayout title="AI Assistant">
      <ChatUI/>
    </ContentLayout>
  );
}
