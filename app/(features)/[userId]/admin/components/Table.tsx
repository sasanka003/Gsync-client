"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  actions?: (item: T) => React.ReactNode;
}

export const Table = <T extends { id: number | string }>({
  headers,
  data,
  renderRow,
  actions,
}: TableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the range of displayed items based on the current page
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Slice the data to only show the current page's items
  const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full">
    <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
      <thead>
        <tr className="bg-emerald-100 text-emerald-900">
          <th className="px-4 py-2 border border-gray-300">
            <input type="checkbox" />
          </th>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-2 border border-gray-300">
              {header}
            </th>
          ))}
          {actions && <th className="px-4 py-2 border border-gray-300">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {displayedData.map((item) => (
          <tr key={item.id} className="odd:bg-white even:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">
              <input type="checkbox" />
            </td>
            {renderRow(item)}
            {actions && (
              <td className="px-4 py-2 border border-gray-300">
                {actions(item)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>

    <div className="flex justify-between items-center mt-4">
        {/* Results count text */}
        <div className="text-sm text-gray-600">
          Showing {startItem} to {endItem} of {totalItems} results
        </div>

        {/* Pagination */}
        <div className="flex items-center space-x-2">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
        </div>
      </div>
    </div>
  );
};
