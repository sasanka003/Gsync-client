import { ContentLayout } from "@/components/dashboard/content-layout";
import { AI } from "./actions";
import ChatComponent from "./components/ChatComponent";

export default function HomePage() {
  return (
    <ContentLayout title="AI Assistant">
      <AI>
        <ChatComponent />
      </AI>
    </ContentLayout>
  );
}
