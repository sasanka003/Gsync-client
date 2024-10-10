"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useGetPlantationDetailsQuery } from "@/app/services/systemAdminSlice"; 
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CalendarIcon, Ellipsis } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; 

const DatePickerButton = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
      <SelectTrigger className="inline-flex justify-center w-[160px] rounded-md border border-muted-foreground shadow-sm px-4 py-2 bg-fill text-p font-medium text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2">
        <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="origin-top-right mr-3 mt-2 w-56 rounded-md shadow-lg bg-fill">
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month) => (
          <SelectItem
            key={month}
            value={month}
            className="block px-4 py-2 text-p text-muted-foreground hover:bg-text-muted-forground"
          >
            {month}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const Plantations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlantations, setSelectedPlantations] = useState<number[]>([]);
  const itemsPerPage = 10;
  const router = useRouter(); // Initialize useRouter

  const {
    data: plantations,
    isLoading,
    isError,
  } = useGetPlantationDetailsQuery(); // Fetch plantation details

  if (isLoading) {
    return <div>Loading plantations...</div>;
  }

  if (isError) {
    return <div>Error loading plantations.</div>;
  }

  // Logging to verify data
  console.log("Plantations data: ", plantations);

  const filteredPlantations =
    plantations?.filter((plantation) =>
      plantation.type.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const totalItems = filteredPlantations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayedPlantations = filteredPlantations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectPlantation = (id: number) => {
    setSelectedPlantations((prev) =>
      prev.includes(id)
        ? prev.filter((plantationId) => plantationId !== id)
        : [...prev, id]
    );
  };

  const handleDelete = () => {
    console.log("Deleting:", selectedPlantations);
  };

  const handleRedirect = (plantation_id: number) => {
    router.push(`/admin/plantation-requests-approval`);
  };

  return (
    <div className="pt-10 pl-10 pr-5">
      <div className="p-4 border border-text rounded-lg">
        <div className="flex items-center mb-4 justify-between">
          <div className="mt-3 mr-[200px]">
            <h1 className="text-h2 font-semibold mb-4">Plantation Requests</h1>
          </div>

          <div className="flex space-x-2">
            <div className="relative">
              <Input
                placeholder="Search Plantations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-[304px]"
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2 h-6 w-6 text-muted-foreground" />
            </div>
            <DatePickerButton />
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-p-ui-medium font-semibold">
            All Plantations {totalItems}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-p text-common">
              {selectedPlantations.length} items selected
            </div>
            <Button
              className="bg-destructive text-fill disabled:hover:bg-destructive disabled:hover:text-fill"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input
                  type="checkbox"
                  checked={
                    selectedPlantations.length === displayedPlantations.length
                  }
                  onChange={() =>
                    setSelectedPlantations(
                      selectedPlantations.length === displayedPlantations.length
                        ? []
                        : displayedPlantations.map((p) => p.plantation_id)
                    )
                  }
                />
              </TableHead>
              <TableHead>Plantation ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-10 p-0" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedPlantations.length > 0 ? (
              displayedPlantations.map((plantation) => (
                <TableRow key={plantation.plantation_id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedPlantations.includes(
                        plantation.plantation_id
                      )}
                      onChange={() =>
                        handleSelectPlantation(plantation.plantation_id)
                      }
                    />
                  </TableCell>
                  <TableCell
                    className="cursor-pointer text-primary hover:underline"
                    onClick={() => handleRedirect(plantation.plantation_id)}
                  >
                    {plantation.plantation_id}
                  </TableCell>
                  <TableCell>{plantation.type}</TableCell>
                  <TableCell>{plantation.user_id}</TableCell>
                  <TableCell>{plantation.city}</TableCell>
                  <TableCell>
                    {new Date(plantation.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{plantation.status}</TableCell>
                  <TableCell>
                    <Ellipsis className="text-muted-foreground" />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  No plantations found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center mt-4">
          <div className="text-p text-common">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
            results
          </div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => setCurrentPage(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plantations;
