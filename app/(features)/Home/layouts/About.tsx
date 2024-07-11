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
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled
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
