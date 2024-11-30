import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import PlantReqCard from "./components/PlantReqCard";
import StatCard from "./components/StatCard";
import { Calendar } from "lucide-react";

export default function AdminDashboard() {
  const requests = [
    {
      type: "Greenhouse",
      location: "Colombo, Western",
      linkText: "View Request",
      date: "2 Hours Ago",
    },
    {
      type: "Greenhouse",
      location: "Colombo, Western",
      linkText: "View Request",
      date: "3 Hours Ago",
    },
    {
      type: "Plant Bed",
      location: "Badulla, Uwa",
      linkText: "View Request",
      date: "Yesterday",
    }
  ];
  return (
    <ContentLayout title="Admin Dashbaord">
      <div className="grid justify-center items-center h-full my-5">
        <div className="flex justify-center gap-5">
          <StatCard
            title="Total Users"
            content={20}
            altText="Last Updated Yesterday"
            icon={<Calendar className="w-6 h-6 text-muted-foreground" />}
          />
          <StatCard
            title="Active Users"
            content={2}
            altText="Last Updated Yesterday"
            icon={<Calendar className="w-6 h-6 text-muted-foreground" />}
          />
          <StatCard
            title="Active Subscriptions"
            content={4}
            altText="Last Updated Yesterday"
            icon={<Calendar className="w-6 h-6 text-muted-foreground" />}
          />
        </div>

        <div className="flex justify-center gap-5">
          <StatCard
            title="Total Plantations"
            content={3}
            altText="Last Updated Yesterday"
            icon={<Calendar className="w-6 h-6 text-muted-foreground" />}
          />
          <StatCard
            title="Approved Requests"
            content={5}
            altText="Last Updated Yesterday"
            icon={<Calendar className="w-6 h-6 text-muted-foreground" />}
          />
          <StatCard
            title="Pending Requests"
            content={2}
            altText="Last Updated Yesterday"
            icon={<Calendar className="w-6 h-6 text-muted-foreground" />}
          />
        </div>

        <div className="flex justify-start gap-5">
          <PlantReqCard
            requests={requests}
            status="Pending"
            lastUpdated="1 hour ago"
          ></PlantReqCard>
        </div>
      </div>
    </ContentLayout>
  );
}
