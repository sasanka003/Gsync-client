"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "../ModeToggle";
import { SheetMenu } from "./sheet-menu";
import { UserNav } from "./user-nav";
import { User } from "@/types/User";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        if (data.safeUser) {
          setUser(data.safeUser);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const firstLetter = user ? getFirstLetter(user.name) : "";

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className=" text-h2 text-text">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          {user && (
            <UserNav
              email={user.email}
              name={user.name}
              firstLetter={firstLetter}
            />
          )}
        </div>
      </div>
    </header>
  );
}
