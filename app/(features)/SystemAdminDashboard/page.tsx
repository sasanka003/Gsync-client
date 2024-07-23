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
import { CalendarIcon } from "lucide-react";
import { Ellipsis } from "lucide-react";

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
  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
      <SelectTrigger className="inline-flex justify-center w-[160px] rounded-md border border-muted-foreground shadow-sm px-4 py-2 bg-fill text-p font-medium text-muted-foreground hover:bg- focus:outline-none focus:ring-2 focus:ring-offset-2 ">
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

const SystemAdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedGardeners, setSelectedGardeners] = useState<Set<string>>(
    new Set()
  );

  const gardeners = Array.from({ length: 44 }, (_, index) => ({
    id: `#${String(index + 1).padStart(4, "0")}`,
    name: index === 0 ? "gsyncuser1" : "Waruna Parackkrama",
    email: "warunapara@gmail.com",
    address: "221/B, Baker St, Colombo 06",
    contact: "94 77 123 4567",
  }));

  const filteredGardeners = gardeners.filter((gardener) =>
    gardener.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGardeners.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedGardeners((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  return (
    <div className="p-4 border">
      <div className="flex items-center mb-4">
        <div className="mt-3 mr-[200px]">
          <h1 className="text-h2 font-semibold mb-4">Gardeners</h1>
        </div>
        <div className="flex space-x-2">
          <div>
            <Input
              placeholder="Search Gardeners"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-[304px]"
            />
            <MagnifyingGlassIcon className="absolute left-2 top-2 h-6 w-6 text-muted-foreground" />
          </div>
          <DatePickerButton />
          <Button className="bg-accent-foreground text-fill">
            + Add Gardener
          </Button>
        </div>
        <div className="flex space-x-2"></div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-p-ui-medium text-common mt-2">
            All Gardeners{" "}
            <span className=" ml-2 text-p-ui-medium text-muted-foreground">
              {gardeners.length}
            </span>
          </p>
        </div>
        <div className="flex gap-[30px]">
          {" "}
          <p className="mt-2">{selectedGardeners.size} items selected</p>
          <Button className="bg-destructive text-fill disabled:hover:bg-destructive disabled:hover:text-fill">
            Delete
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 p-0"></TableHead>
            <TableHead>USER ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>ADDRESS</TableHead>
            <TableHead>CONTACT NUMBER</TableHead>
            <TableHead className="w-10 p-0" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((gardener) => (
            <TableRow key={gardener.id}>
              <TableCell className="w-10 p-0">
                <Checkbox
                  checked={selectedGardeners.has(gardener.id)}
                  onCheckedChange={() => handleCheckboxChange(gardener.id)}
                />
              </TableCell>
              <TableCell>{gardener.id}</TableCell>
              <TableCell>{gardener.name}</TableCell>
              <TableCell>{gardener.email}</TableCell>
              <TableCell>{gardener.address}</TableCell>
              <TableCell>{gardener.contact}</TableCell>
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
          Showing 1 to 10 of 44 results
        </div>

        <Pagination
          totalItems={filteredGardeners.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default SystemAdminDashboard;
