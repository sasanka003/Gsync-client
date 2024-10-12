"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
}
