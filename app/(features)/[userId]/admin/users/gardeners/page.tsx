"use client";

import React from "react";
import { useState } from "react";
import { Table } from "../../components/Table";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { SearchBox } from "../../components/SearchBox";

const GardenerTable = () => {
  const gardeners = [
    {
      id: 1,
      userId: "#001",
      name: "Chathurika Bandara",
      email: "chathurika@gmail.com",
      address: "88, Parliament Road, Battaramulla",
      contactNumber: "071-2345678",
    },
    {
      id: 2,
      userId: "#002",
      name: "Janaka Silva",
      email: "janakasilva@yahoo.com",
      address: "No. 56, Hill Street, Nuwara Eliya",
      contactNumber: "077-8765432",
    },
    {
      id: 3,
      userId: "#003",
      name: "Lakshmi Kumari",
      email: "lakshmi.kumari@gmail.com",
      address: "No. 14, Galle Face, Colombo 01",
      contactNumber: "072-1234567",
    },
    {
      id: 4,
      userId: "#004",
      name: "Dinesh Fernando",
      email: "dinesh.fernando@sltnet.lk",
      address: "No. 90, Kandy Road, Kurunegala",
      contactNumber: "078-3456789",
    },
    {
      id: 5,
      userId: "#005",
      name: "Nadeesha Perera",
      email: "nadeesha.perera@hotmail.com",
      address: "No. 28, Rathmalana, Kalutara",
      contactNumber: "073-6543210",
    },
    {
      id: 6,
      userId: "#006",
      name: "Kamal Perera",
      email: "kamalperera@gmail.com",
      address: "45/2, Galle Road, Colombo 03",
      contactNumber: "077-1234567",
    },
    {
      id: 7,
      userId: "#007",
      name: "Priya Fernando",
      email: "priyafernando@yahoo.com",
      address: "No. 12, Thalawathugoda, Kaduwela",
      contactNumber: "077-7654321",
    },
    {
      id: 8,
      userId: "#008",
      name: "Ravi Silva",
      email: "ravisilva@gmail.com",
      address: "34, Gampaha Road, Kelaniya",
      contactNumber: "071-2345678",
    },
    {
      id: 9,
      userId: "#009",
      name: "Shanika Weerasinghe",
      email: "shanika@outlook.com",
      address: "No. 22, Main Street, Kandy",
      contactNumber: "072-8765432",
    },
    {
      id: 10,
      userId: "#010",
      name: "Nirosha Kumari",
      email: "nirosha.kumari@gmail.com",
      address: "15, High Level Road, Nugegoda",
      contactNumber: "075-2345678",
    },
    {
      id: 11,
      userId: "#011",
      name: "Saman Perera",
      email: "saman.perera@sltnet.lk",
      address: "No. 80, Moratuwa Road, Dehiwala",
      contactNumber: "078-9876543",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContentLayout title="Users">
      <div className="p-6 border rounded-md mx-4 my-4 shadow-lg">
        <div className="flex items-center justify-between mb-4 space-x-4">
          <h1 className="text-h3 font-semibold">Gardeners</h1>
          <SearchBox
            value={searchTerm}
            onChange={setSearchTerm}
            width="300px"
          />
        </div>
        <Table
          headers={["User ID", "Name", "Email", "Address", "Contact Number"]}
          data={gardeners}
          renderRow={(gardener) => (
            <>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {gardener.userId}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {gardener.name}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {gardener.email}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {gardener.address}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {gardener.contactNumber}
              </td>
            </>
          )}
        />
      </div>
    </ContentLayout>
  );
};

export default GardenerTable;
