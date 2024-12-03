import { Subscription } from "@/types/plantations";
import {
  LucideIcon,
  MessageCircle,
  ChartColumnIncreasing,
  House,
  Users,
  Leaf,
  CircleHelp,
  Cog
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
  requiredSubscription?: Subscription[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string, userId: string, userSubscription: Subscription): Group[] {
  const allMenus: Menu[] = [
    {
      href: `/${userId}/dashboard`,
      label: "Dashboard",
      active: pathname.includes("/dashboard"),
      icon: House,
      submenus: [],
      requiredSubscription: [Subscription.Basic, Subscription.Gardener, Subscription.Enterprise]
    },
    {
      href: `/${userId}/ai-assistant`,
      label: "Ai Assistant",
      active: pathname.includes("/ai-assistant"),
      icon: MessageCircle,
      submenus: [],
      requiredSubscription: [Subscription.Gardener, Subscription.Enterprise]
    },
    {
      href: `/${userId}/analytics`,
      label: "Analytics",
      active: pathname.includes("/analytics"),
      icon: ChartColumnIncreasing,
      submenus: [],
      requiredSubscription: [Subscription.Gardener, Subscription.Enterprise]
    },
    {
      href: `/${userId}/community`,
      label: "Community",
      active: pathname.includes("/community"),
      icon: Users,
      submenus: [],
      requiredSubscription: [Subscription.Basic, Subscription.Gardener, Subscription.Enterprise]
    }
  ];

  // Filter menus based on user subscription
  const filteredMenus = allMenus.filter(menu => 
    menu.requiredSubscription?.includes(userSubscription) ?? false
  );

  return [{
    groupLabel: "",
    menus: filteredMenus
  }];
}

export function getAdminMenuList(pathname: string, userId: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/${userId}/admin/dashboard`,
          label: "Dashboard",
          active: pathname.includes("/admin/dashboard"),
          icon: House,
          submenus: []
        },
        {
          href: `/${userId}/admin/users`,
          label: "Users",
          active: pathname.includes("/admin/users"),
          icon: Users,
          submenus: [
            {
              href: `/${userId}/admin/users/gardeners`,
              label: "Gardeners",
              active: pathname.includes("/admin/users/gardeners")
            },
            {
              href: `/${userId}/admin/users/enterprises`,
              label: "Enterprises",
              active: pathname.includes("/admin/users/enterprises")
            },
            {
              href: `/${userId}/admin/users/admins`,
              label: "Admins",
              active: pathname.includes("/admin/users/admins")
            }
          ]
        },
        {
          href: `/${userId}/admin/plantations`,
          label: "Plantations",
          active: pathname.includes("/admin/plantations"),
          icon: Leaf,
          submenus: []
        },
        {
          href: `/${userId}/admin/HelpRequests-Table`,
          label: "Help Requests",
          active: pathname.includes("/admin/help-requests"),
          icon: CircleHelp,
          submenus: []
        },
        {
          href: `/${userId}/admin/settings`,
          label: "Settings",
          active: pathname.includes("/admin/settings"),
          icon: Cog,
          submenus: []
        }
      ]
    },
  ];
}
