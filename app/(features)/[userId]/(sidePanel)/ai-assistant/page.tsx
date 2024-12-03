import { ContentLayout } from "@/components/dashboard/content-layout";
import { AI } from "./actions";
import ChatComponent from "./components/ChatComponent";
import  PlantImageCard  from "./components/PlantImageCard";
import DeviceStatCard from "./components/DeviceStatCard";

export default function HomePage() {
  return (
    <ContentLayout title="AI Assistant">
      <AI>
        <ChatComponent />
      </AI>
    </ContentLayout>
  );
}
