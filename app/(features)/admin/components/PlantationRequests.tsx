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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CalendarIcon, Ellipsis } from "lucide-react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 mr-2 bg-background rounded-md text-muted-foreground"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 mr-2 rounded-md hover:bg-gray-200 ${
            currentPage === index + 1
              ? "bg-background text-muted-foreground"
              : "bg-background"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mr-2 bg-background rounded-md text-muted-foreground"
      >
        Next
      </button>
    </div>
  );
};

const DatePickerButton = () => {
  const [selectedMonth, setSelectedMonth] = useState("Last Month");

  return (
    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
      <SelectTrigger className="inline-flex justify-center w-[160px] rounded-md border border-muted-foreground shadow-sm px-4 py-2 bg-fill text-p font-medium text-muted-foreground hover:bg- focus:outline-none focus:ring-2 focus:ring-offset-2 ">
        <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="origin-top-right mr-3 mt-2 w-56 rounded-md shadow-lg bg-fill">
        {[
          "Last Month",
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

const PlantationRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedRequests, setSelectedRequests] = useState<Set<string>>(
    new Set()
  );

  const requests = Array.from({ length: 44 }, (_, index) => ({
    id: `#${String(index + 1).padStart(4, "0")}`,
    type: "Greenhouse",
    requester: "Waruna Parackkrama",
    location: "Siebel Avenue, Colombo 06",
    date: "01/04/2021",
    status:
      index % 4 === 0
        ? "Approved"
        : index % 3 === 0
        ? "Declined"
        : "Unapproved",
  }));

  const filteredRequests = requests.filter((request) =>
    request.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedRequests((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green text-white px-2 py-2 rounded-full";
      case "Declined":
        return "bg-destructive text-white px-2 py-2 rounded-full";
      case "Unapproved":
        return "bg-grey text-white px-2 py-2 rounded-full";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 mt-10 ml-10 mr-5 border border-text rounded-lg">
      <div className="flex justify-between mb-4 ">
        <div className="mt-3">
          <h1 className="text-h2 font-semibold mb-4">Plantation Requests</h1>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="relative">
            <Input
              placeholder="Search Plantations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-[304px]"
            />
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
          </div>
          <DatePickerButton />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-p-ui-medium text-common mt-2">
            All Plantations{" "}
            <span className="ml-2 text-p-ui-medium text-muted-foreground">
              {requests.length}
            </span>
          </p>
        </div>
        <div className="flex gap-[30px]">
          <p className="mt-2">{selectedRequests.size} items selected</p>
          <Button className="bg-destructive text-fill disabled:hover:bg-destructive disabled:hover:text-fill">
            Delete
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 p-0"></TableHead>
            <TableHead>PLANTATION ID</TableHead>
            <TableHead>PLANTATION TYPE</TableHead>
            <TableHead>REQUESTED BY</TableHead>
            <TableHead>LOCATION</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead className="w-10 p-0" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="w-10 p-0">
                <Checkbox
                  checked={selectedRequests.has(request.id)}
                  onCheckedChange={() => handleCheckboxChange(request.id)}
                />
              </TableCell>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.requester}</TableCell>
              <TableCell>{request.location}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>
                <span className={getStatusClass(request.status)}>
                  {request.status}
                </span>
              </TableCell>
              <TableCell className="w-10 p-0">
                <Button variant="ghost">
                  <Ellipsis className="text-muted-foreground" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between">
        <div className="text-p text-common mt-5">
          Showing 1 to {Math.min(itemsPerPage, filteredRequests.length)} of{" "}
          {filteredRequests.length} results
        </div>
        <Pagination
          totalItems={filteredRequests.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PlantationRequests;
