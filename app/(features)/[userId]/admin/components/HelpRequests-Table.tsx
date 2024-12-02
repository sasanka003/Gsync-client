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

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAllHelpRequestsQuery } from "@/app/services/systemAdminSlice";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";

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

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [selectedHelpRequest, setselectedHelpRequest] = useState<Set<string>>(
    new Set()
  );

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [popupContent, setPopupContent] = useState<JSX.Element | null>(null);

  const [openDialog, setOpenDialog] = useState(false);

  const { toast } = useToast();

  // const isAdmin = useAdminAccess();
  const { data, isLoading, isError } = useGetAllHelpRequestsQuery();

  // if (!isAdmin) {
  //   return <div>You do not have permission to view this page.</div>;
  // }

  if (isLoading) {
    return <div>Loading help Requests...</div>;
  }

  if (isError) {
    return <div>Error help requests.</div>;
  }

  const helpRequests = data || [];
  const totalItems = data?.length || 0;

  const filteredHelpRequest = helpRequests.filter((helpRequests) =>
    helpRequests.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDropdownOpen = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pt-10 pl-10 pr-5">
      <div className="p-4 border border-text rounded-lg">
        <div className="flex items-center mb-4 justify-between">
          <div className="mt-3 mr-[200px]">
            <h1 className="text-h2 font-semibold mb-4">Help Requests</h1>
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <Input
                placeholder="Search HelpRequests"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-[304px]"
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2 h-6 w-6 text-muted-foreground" />
            </div>
            <DatePickerButton />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-p-ui-medium text-common mt-2">
              All Help Requests{" "}
              <span className=" ml-2 text-p-ui-medium text-muted-foreground">
                {totalItems}
              </span>
            </p>
          </div>
          <div className="flex gap-[30px]">
            <p className="mt-2">{selectedHelpRequest.size} items selected</p>
            <Button className="bg-destructive text-fill disabled:hover:bg-destructive disabled:hover:text-fill">
              Delete
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="w-10 p-0" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHelpRequest.map((HelpRequest) => (
              <TableRow key={HelpRequest.help_request_id}>
                <TableCell>{HelpRequest.help_request_id}</TableCell>
                <TableCell>{HelpRequest.subject}</TableCell>
                <TableCell>{HelpRequest.message}</TableCell>
                <TableCell>{HelpRequest.createdAt}</TableCell>
                <TableCell>{HelpRequest.name}</TableCell>
                <TableCell>{HelpRequest.type}</TableCell>
                <TableCell className="w-10 p-0"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center mt-4">
          <div className="text-p text-common">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
            results
          </div>
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

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-auto">
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
