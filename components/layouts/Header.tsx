"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import SideNavMenu from "@/components/layouts/sideNavMenu";

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const isDashboardRoute = pathname.startsWith("/dashboard");
  return <>{!isDashboardRoute ? <Navbar /> : <SideNavMenu />}</>;
};

export default Header;
