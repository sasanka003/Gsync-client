import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import StatusCard from "./Components/StatusCard";
import { Calendar} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const StatusCards = [
    {
        title: "My Plantation 01",
        Content: "in Review",
        altText: "Last updated 1 hour ago",
        icon: <Calendar />,
    },
    
    {
        title: "My Plantation 02",
        Content: "in Review",
        altText: "Last updated 1 hour ago",
        icon: <Calendar />,
    },
    {
        title: "My Plantation 03",
        Content: "in Review",
        altText: "Last updated 1 hour ago",
        icon: <Calendar />,
    },
];

export default function RequestsPending() {
    return (
        <ContentLayout title="Dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 ml-4 mb-10">
                <div className="flex space-x-4 col-span-1 lg:col-span-2">
                    {StatusCards.map((data, index) => (
                        <StatusCard
                            key={index}
                            title={data.title}
                            Content={data.Content}
                            altText={data.altText}
                            icon={data.icon}
                        />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-2 flex justify-center items-center mt-6">
                    <p className="text-center"
                        style={{fontSize: "var(--text-h2)",
                                color: "var(--grey)",
                                
                        }}
                    >
                        Dashboard will set up once your plantation requests have been approved.
                    </p>
                </div>
            </div>
        </ContentLayout>
    )
}
