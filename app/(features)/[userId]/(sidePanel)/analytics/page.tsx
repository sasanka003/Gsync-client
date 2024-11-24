import React from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Analytics() {
  return (
    <ContentLayout title="Analytics">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-5 ml-4 mb-10">
        {/* Tab component */}
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Plantation 01</TabsTrigger>
            <TabsTrigger value="tab2">Plantation 02</TabsTrigger>
          </TabsList>

          {/* Tab 1 Content */}
          <TabsContent value="tab1">
            <div>
              <h2>Section</h2>
            </div>
          </TabsContent>

          {/* Tab 2 Content */}
          <TabsContent value="tab2">
            <div>
              <h2>Section</h2>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
