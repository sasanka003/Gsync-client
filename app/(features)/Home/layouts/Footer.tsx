import React from "react";
import { Logo } from "@/components/Icons";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full mx-auto px-60 gap-4">
      <div className="flex gap-4 justify-center items-center">
      <Logo />
      </div>
      <p className=" text-detail --fs-p-ui text-center">
        © 2024 Gsync. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;