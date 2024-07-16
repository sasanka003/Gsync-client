import React from "react";
import Image from "next/image";
import { Logo } from "../../../../components/Icons";

const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full mx-auto px-60 gap-8">
      <div className="flex gap-4 justify-center items-center">
        <p className="text-h2 lg:text-h1 text-center">About</p>
        <Logo />
      </div>
      <p className=" text-detail lg:text-lead text-center">
      Gsync helps you grow plants better with smart technology. 
      It monitors soil and plant health, suggests the best plants to grow, and connects you with gardening experts.
      Perfect for both home gardeners and businesses, Gsync makes your plantation more productive and profitable.
      </p>
      <Image
        src="/images/AboutImage.png"
        width={621}
        height={284}
        alt="Hero Image"
        className="justify-center items-center mx-auto"
      />
    </div>
  );
};

export default About;
