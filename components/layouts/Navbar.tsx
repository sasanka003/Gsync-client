import React from "react";
import { HamburgerIcon, Logo } from "../Icons";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavMenu from "../NavMenu";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { UserNav } from "../dashboard/user-nav";

export default async function NavBar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const firstLetter = getFirstLetter(user?.user_metadata.name);

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
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center order-3 gap-2">
          <ModeToggle />
          {user !== null ? (
            <UserNav
              email={user.email}
              name={user.user_metadata.name}
              firstLetter={firstLetter}
            />
          ) : (
            <>
              <Link href="/login">
                <Button className="text-body-medium" variant="outline">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="hidden md:flex text-body-medium text-white">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full ml-24 md:flex md:w-auto md:order-2"
          id="navbar-sticky"
        >
          <NavMenu className="text-subtle-medium text-common px-2 hover:bg-accent hover:rounded-[6px] hover:py-2 hover:px-4 hover:text-black" />
        </div>
      </div>
    </nav>
  );
}
