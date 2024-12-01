"use client";

import Link from "next/link";
import { LogOut, ChevronDown, ChevronRight, Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAdminMenuList, getMenuList } from "@/lib/menu-list";
import { signout } from "@/app/auth/actions";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { MenuSkeletonLoader } from "./menuskeletonloader";

export function Menu() {
  const supabase = createClient();
  const [userId, setUserId] = useState<string>("");
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignOutLoading, setIsSignOutLoading] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          setUserId(session.user.id);

          // Fetch the user's role from Supabase
          const { data: userData, error: userError } = await supabase
            .from("profiles")
            .select("type")
            .eq("user_id", session.user.id)
            .single();

          if (userError) {
            console.error("Error fetching user role:", userError.message);
            setUserRole(null);
          } else {
            setUserRole(userData.type);
          }
        }
      } catch (error) {
        console.error("Error in getUser:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  const handleSignout = async () => {
    setIsSignOutLoading(true);
    try {
      const result = await signout();

      if (result?.success) {
        router.push("/login");
      } else {
        console.error(result?.error);
        setIsSignOutLoading(false);
      }
    } catch (error) {
      console.error("Signout failed", error);
      setIsSignOutLoading(false);
    }
  };

  const toggleSubmenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Determine the menu list based on role or loading state
  const getMenuListToRender = () => {
    if (isLoading) {
      return []; // Return empty to prevent rendering
    }

    return userRole === "SysAdmin"
      ? getAdminMenuList(pathname, userId)
      : getMenuList(pathname, userId);
  };

  // If loading, return a loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <MenuSkeletonLoader />
      </div>
    );
  }

  const menuList = getMenuListToRender();

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
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) => (
                  <div className="w-full mt-2" key={index}>
                    <div className="w-full">
                      <Button
                        variant={active ? "secondary" : "ghost"}
                        className="w-full justify-start h-10 mb-1"
                        onClick={() => {
                          if (submenus.length > 0) {
                            toggleSubmenu(label);
                          }
                        }}
                        asChild={submenus.length === 0}
                      >
                        {submenus.length > 0 ? (
                          <div className="flex items-center w-full">
                            <div className="flex items-center flex-grow">
                              <span className="mr-4">
                                <Icon size={18} />
                              </span>
                              <p className="max-w-[200px] text-p-ui-medium text-text truncate">
                                {label}
                              </p>
                            </div>
                            {submenus.length > 0 && (
                              <span>
                                {openMenus[label] ? (
                                  <ChevronDown size={16} />
                                ) : (
                                  <ChevronRight size={16} />
                                )}
                              </span>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={href}
                            className="flex items-center w-full"
                          >
                            <span className="mr-4">
                              <Icon size={18} />
                            </span>
                            <p className="max-w-[200px] text-p-ui-medium text-text truncate">
                              {label}
                            </p>
                          </Link>
                        )}
                      </Button>
                    </div>

                    {/* Submenu dropdown */}
                    {submenus.length > 0 && openMenus[label] && (
                      <div className="pl-8 mt-1 space-y-1">
                        {submenus.map((submenu, subIndex) => (
                          <Button
                            key={subIndex}
                            variant={submenu.active ? "secondary" : "ghost"}
                            className="w-full justify-start h-8 mb-1"
                            asChild
                          >
                            <Link href={submenu.href}>
                              <p className="max-w-[200px] text-p-ui-medium text-text truncate">
                                {submenu.label}
                              </p>
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <Button
              onClick={handleSignout}
              variant="outline"
              disabled={isLoading}
              className="w-full justify-center h-10 mt-5"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Signing out...</span>
                </>
              ) : (
                <>
                  <span className="mr-4">
                    <LogOut size={18} />
                  </span>
                  <p className="whitespace-nowrap">Sign out</p>
                </>
              )}
            </Button>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
