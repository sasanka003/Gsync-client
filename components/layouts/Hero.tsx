import React from "react";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="text-h2 lg:text-h1 text-center">
        <div>Your plants need to be</div>
        <div>Taken care of.</div>
      </div>
     <img
        src="/images/Hero_image.png"
        alt="Hero"
        width="104px"
        height="216px"
        className="lg:w-64 lg:h-132 justify-center items-center mx-auto"
      />
    </div>
  );
};

export default Hero;
