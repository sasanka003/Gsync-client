import React from "react";

interface NavLinkProps {
  className?: string;
}

const NavMenu = ({ className }: NavLinkProps) => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Plans", link: "#plans" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <>
      {navItems.map((item, index) => (
        <a key={index} href={item.link} className={className}>
          {item.name}
        </a>
      ))}
    </>
  );
};

export default NavMenu;
