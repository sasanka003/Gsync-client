"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAdminMenuList, getMenuList } from "@/lib/menu-list";
import { signout } from "@/app/auth/actions";

export function Menu() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const menuList = isAdminRoute
    ? getAdminMenuList(pathname)
    : getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {groupLabel && (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              )}
              {menus.map(({ href, label, icon: Icon, active }, index) => (
                <div className="w-full mt-2" key={index}>
                  <Button
                    variant={active ? "secondary" : "ghost"}
                    className="w-full justify-start h-10 mb-1"
                    asChild
                  >
                    <Link href={href}>
                      <span className="mr-4">
                        <Icon size={18} />
                      </span>
                      <p className="max-w-[200px] text-p-ui-medium text-text truncate">
                        {label}
                      </p>
                    </Link>
                  </Button>
                </div>
              ))}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <Button
              onClick={() => signout}
              variant="outline"
              className="w-full justify-center h-10 mt-5"
            >
              <span className="mr-4">
                <LogOut size={18} />
              </span>
              <p className="whitespace-nowrap">Sign out</p>
            </Button>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
