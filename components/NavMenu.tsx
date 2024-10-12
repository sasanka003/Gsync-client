"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavLinkProps {
  className?: string;
}

const NavMenu = ({ className }: NavLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Features", link: "features" },
    { name: "Plans", link: "plans" },
    { name: "Contact", link: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (link: string) => {
    if (pathname === "/") {
      handleScroll(link);
    } else {
      router.push(`/#${link}`);
    }
  };
  return (
    <>
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item.link)}
          className={className}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default NavMenu;
