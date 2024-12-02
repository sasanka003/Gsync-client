"use client";

import React from "react";
import { useState } from "react";
import { Table } from "../../components/Table";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { SearchBox } from "../../components/SearchBox";

const EnterpriseTable = () => {
  const enterprises = [
      {
        "id": 1,
        "userId": "#001",
        "name": "GreenFields Organic Farm",
        "email": "contact@greenfields.lk",
        "address": "123, Gampaha Road, Kelaniya, Western Province",
        "contactNumber": "011-2345678"
      },
      {
        "id": 2,
        "userId": "#002",
        "name": "Suriya Agro Industries",
        "email": "info@suriyaagro.lk",
        "address": "No. 45, Walpola, Kandy, Central Province",
        "contactNumber": "081-8765432"
      },
      {
        "id": 3,
        "userId": "#003",
        "name": "Sri Lanka Herbal Farms",
        "email": "info@srilankaherbals.lk",
        "address": "No. 10, Weligama Road, Matara, Southern Province",
        "contactNumber": "041-1234567"
      },
      {
        "id": 4,
        "userId": "#004",
        "name": "Uva Green Plantations",
        "email": "contact@uvagreen.lk",
        "address": "22, Badulla Road, Bandarawela, Uva Province",
        "contactNumber": "055-3456789"
      },
      {
        "id": 5,
        "userId": "#005",
        "name": "Ceylon Spice Gardens",
        "email": "sales@ceylonspices.lk",
        "address": "No. 8, Rathmalana, Kalutara, Western Province",
        "contactNumber": "034-6543210"
      }
    
    
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContentLayout title="Users">
      <div className="p-6 border rounded-md mx-4 my-4 shadow-lg">
        <div className="flex items-center justify-between mb-4 space-x-4">
          <h1 className="text-h3 font-semibold">Enterprises</h1>
          <SearchBox
            value={searchTerm}
            onChange={setSearchTerm}
            width="300px"
          />
        </div>
        <Table
          headers={["User ID", "Name", "Email", "Address", "Contact Number"]}
          data={enterprises}
          renderRow={(enterprise) => (
            <>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {enterprise.userId}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {enterprise.name}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {enterprise.email}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {enterprise.address}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-500">
                {enterprise.contactNumber}
              </td>
            </>
          )}
          actions={(enterprise) => (
            <div className="flex space-x-2">
              <button className="text-emerald-600 hover:underline">Edit</button>
              <button className="text-red-500 hover:underline">Remove</button>
            </div>
          )}
        />
      </div>
    </ContentLayout>
  );
};

export default EnterpriseTable;
