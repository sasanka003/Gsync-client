"use client";

import React from "react";
import { useState } from "react";
import { Table } from "../components/Table";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { SearchBox } from "../components/SearchBox";

const HelpRequestTable = () => {
  const requests = [
    {
      id: 1,
      requestId: "#REQ001",
      name: "Nimal Perera",
      email: "nimal.perera@example.com",
      subject: "Unable to add plantation to the system",
      date: "2024-12-01",
    },
    {
      id: 2,
      requestId: "#REQ002",
      name: "Amara Silva",
      email: "amara.silva@example.com",
      subject: "Issue with IoT device connectivity",
      date: "2024-12-02",
    },
    {
      id: 3,
      requestId: "#REQ003",
      name: "Kamal Fernando",
      email: "kamal.fernando@example.com",
      subject: "Payment not reflecting on dashboard",
      date: "2024-12-02",
    },
    {
      id: 4,
      requestId: "#REQ004",
      name: "Chathurika Bandara",
      email: "chathurika.bandara@example.com",
      subject: "AI assistant not responding properly",
      date: "2024-12-03",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContentLayout title="Help Requests">
      <div className="p-6 border rounded-md mx-4 my-4 shadow-lg">
        <div className="flex items-center justify-between mb-4 space-x-4">
          <h1 className="text-h3 font-semibold">Help Requests</h1>
          <SearchBox
            value={searchTerm}
            onChange={setSearchTerm}
            width="300px"
          />
        </div>
        <Table
          headers={["Request ID", "Name", "Email", "Subject", "Date"]}
          data={requests}
          renderRow={(request) => (
            <>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {request.requestId}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {request.name}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {request.email}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {request.subject}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {request.date}
              </td>
            </>
          )}
        />
      </div>
    </ContentLayout>
  );
};

export default HelpRequestTable;
