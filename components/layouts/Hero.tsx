import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="text-h2 lg:text-h1 text-center">
        <div>Your plants need to be</div>
        <div>Taken care of.</div>
      </div>
      <Image
        src="/images/HeroImage.png"
        width={256}
        height={524}
        alt="Hero Image"
        className="justify-center items-center mx-auto"
      />
    </div>
  );
};

export default Hero;
