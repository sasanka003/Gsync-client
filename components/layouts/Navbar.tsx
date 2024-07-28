import React from "react";
import { HamburgerIcon, Logo } from "../Icons";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavMenu from "../NavMenu";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full z-20 top-0 start-0">
      <div className="flex flex-row items-center justify-between px-8 md:px-16 py-5">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <HamburgerIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-10 text-h4 mt-16 ml-4 text-common">
              <NavMenu />
            </div>
          </SheetContent>
        </Sheet>
        <div className="order-2 md:order-1">
          <Logo />
        </div>
        <div className="flex items-center order-3 gap-2">
          <ModeToggle />
          <Button className="text-body-medium" variant="outline">
            Sign In
          </Button>
          <Link href="/sign-up">
            <Button className="hidden md:flex text-body-medium text-white">
              Sign Up
            </Button>
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
          id="navbar-sticky"
        >
          <NavMenu className="text-subtle-medium text-common px-2 hover:bg-accent hover:rounded-[6px] hover:py-2 hover:px-4 hover:text-black" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
