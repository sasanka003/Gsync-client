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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  useDeleteGardenerMutation,
  useGetAllGardenersQuery,
} from "@/app/services/systemAdminSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import EditGardener from "./EditGardener";
import AddGardeners from "./AddGardeners";

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

  const [selectedGardeners, setSelectedGardeners] = useState<Set<string>>(
    new Set()
  );

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [popupContent, setPopupContent] = useState<JSX.Element | null>(null);

  const [openDialog, setOpenDialog] = useState(false);

  const [deleteGardener] = useDeleteGardenerMutation();

  const { toast } = useToast();

  // const isAdmin = useAdminAccess();
  const { data, isLoading, isError } = useGetAllGardenersQuery(
    { page: currentPage, page_size: itemsPerPage }
    // { skip: !isAdmin }
  );

  // if (!isAdmin) {
  //   return <div>You do not have permission to view this page.</div>;
  // }

  if (isLoading) {
    return <div>Loading gardeners...</div>;
  }

  if (isError) {
    return <div>Error loading gardeners.</div>;
  }

  const gardeners = data || [];
  const totalItems = data?.length || 0;

  const filteredGardeners = gardeners.filter((gardener) =>
    gardener.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleDropdownOpen = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleDropdownSelect = (option: string, gardener: any) => {
    if (option === "edit") {
      setPopupContent(
        <EditGardener
          gardener={gardener}
          closePopup={() => setIsPopupOpen(false)}
        />
      );
      setIsPopupOpen(true);
    } else if (option === "remove") {
      setSelectedGardeners(new Set([gardener.user_id]));
      setOpenDialog(true);
    } else if (option === "add") {
      setPopupContent(<AddGardeners />);
      setIsPopupOpen(true);
    }
  };

  const confirmDelete = async () => {
    if (selectedGardeners.size > 0) {
      try {
        const userIds = Array.from(selectedGardeners);
        for (const userId of userIds) {
          await deleteGardener(userId).unwrap(); // Use unwrap to handle promise
        }
        toast({
          title: "Success!",
          description: "Gardener has been deleted successfully.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete gardener.",
          variant: "destructive",
        });
      }
      setSelectedGardeners(new Set());
      setOpenDialog(false);
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pt-10 pl-10 pr-5">
      <div className="p-4 border border-text rounded-lg">
        <div className="flex items-center mb-4 justify-between">
          <div className="mt-3 mr-[200px]">
            <h1 className="text-h2 font-semibold mb-4">Gardeners</h1>
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <Input
                placeholder="Search Gardeners"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-[304px]"
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2 h-6 w-6 text-muted-foreground" />
            </div>
            <DatePickerButton />
            <Button
              className="bg-accent-foreground text-fill"
              onClick={() => handleDropdownSelect("add", null)}
            >
              + Add Gardener
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-p-ui-medium text-common mt-2">
              All Gardeners{" "}
              <span className=" ml-2 text-p-ui-medium text-muted-foreground">
                {totalItems}
              </span>
            </p>
          </div>
          <div className="flex gap-[30px]">
            <p className="mt-2">{selectedGardeners.size} items selected</p>
            <Button className="bg-destructive text-fill disabled:hover:bg-destructive disabled:hover:text-fill">
              Delete
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10 p-0" />
              <TableHead>USER ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>PHONE</TableHead>
              <TableHead className="w-10 p-0" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGardeners.map((gardener) => (
              <TableRow key={gardener.user_id}>
                <TableCell className="w-10 p-0">
                  <Checkbox
                    checked={selectedGardeners.has(gardener.user_id)}
                    onCheckedChange={() =>
                      handleCheckboxChange(gardener.user_id)
                    }
                  />
                </TableCell>
                <TableCell>{gardener.user_id}</TableCell>
                <TableCell>{gardener.name}</TableCell>
                <TableCell>{gardener.email}</TableCell>
                <TableCell>{gardener.phone}</TableCell>
                <TableCell className="w-10 p-0">
                  <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          onClick={() => handleDropdownOpen(gardener.user_id)}
                        >
                          <Ellipsis className="text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-white border border-gray-200 rounded-md shadow-md"
                      >
                        <DropdownMenuItem
                          className="px-4 py-2 text-muted-forground hover:bg-accent"
                          onClick={() => handleDropdownSelect("view", gardener)}
                        >
                          View Gardener
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="px-4 py-2 text-muted-forground hover:bg-accent"
                          onClick={() => handleDropdownSelect("edit", gardener)}
                        >
                          Edit Gardener
                        </DropdownMenuItem>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem
                            className="px-4 py-2 text-red-600 hover:bg-accent"
                            onClick={() =>
                              handleDropdownSelect("remove", gardener)
                            }
                          >
                            Remove Gardener
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}>
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
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
