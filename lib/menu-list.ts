import {
  LucideIcon,
  MessageCircle,
  Joystick,
  ChartColumnIncreasing,
  House,
  Users,
  Cog,
  Leaf
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: House,
          submenus: []
        },
        {
          href: "/ai-assistant",
          label: "Ai Assistant",
          active: pathname.includes("/ai-assistant"),
          icon: MessageCircle,
          submenus: []
        },
        {
          href: "/devices",
          label: "Devices",
          active: pathname.includes("/devices"),
          icon: Joystick,
          submenus: []
        },
        {
          href: "/analytics",
          label: "Analytics",
          active: pathname.includes("/analytics"),
          icon: ChartColumnIncreasing,
          submenus: []
        },
        {
          href: "/community",
          label: "Community",
          active: pathname.includes("/community"),
          icon: Users,
          submenus: []
        },
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Cog,
          submenus: []
        }
      ]
    },
  ];
}
export function getAdminMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/admin/dashboard",
          label: "Dashboard",
          active: pathname.includes("/admin/dashboard"),
          icon: House,
          submenus: []
        },
        {
          href: "/admin/users",
          label: "Users",
          active: pathname.includes("/admin/users"),
          icon: Users,
          submenus: []
        },
        {
          href: "/admin/plantation-requests",
          label: "Plantations",
          active: pathname.includes("/admin/plantation-requests"),
          icon: Leaf,
          submenus: []
        }
      ]
    },
  ];
}
