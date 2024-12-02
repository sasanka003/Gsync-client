"use client";

import React from "react";
import { useState } from "react";
import { Table } from "../../components/Table";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { SearchBox } from "../../components/SearchBox";

const AdminTable = () => {
  const admins = [
    {
      "id": 1,
      "userId": "#ADM001",
      "name": "Anura Wijesinghe",
      "email": "admin1@gsync.lk",
      "contactNumber": "011-1234567"
    },
    {
      "id": 2,
      "userId": "#ADM002",
      "name": "Shanika Perera",
      "email": "admin2@gsync.lk",
      "contactNumber": "077-2345678"
    },
    {
      "id": 3,
      "userId": "#ADM003",
      "name": "Kumar Dissanayake",
      "email": "admin3@gsync.lk",
      "contactNumber": "081-9876543"
    },
    {
      "id": 4,
      "userId": "#ADM004",
      "name": "Ruwanthi Silva",
      "email": "admin4@gsync.lk",
      "contactNumber": "072-3456789"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContentLayout title="Users">
      <div className="p-6 border rounded-md mx-4 my-4 shadow-lg">
        <div className="flex items-center justify-between mb-4 space-x-4">
          <h1 className="text-h3 font-semibold">Administrators</h1>
          <SearchBox
            value={searchTerm}
            onChange={setSearchTerm}
            width="300px"
          />
        </div>
        <Table
          headers={["User ID", "Name", "Email", "Contact Number"]}
          data={admins}
          renderRow={(admin) => (
            <>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {admin.userId}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {admin.name}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {admin.email}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {admin.contactNumber}
              </td>
            </>
          )}
          
        />
      </div>
    </ContentLayout>
  );
};

export default AdminTable;
