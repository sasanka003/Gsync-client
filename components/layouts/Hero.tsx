"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",}}>
      <div className="lg:text-h1 sm:text-h2 text-center">Your plants need to be</div>
      <div className="lg:text-h1 sm:text-h2 text-center">Taken care of.</div>
      <img
        src="/images/Hero_image.png"
        alt="Hero"
        width="256"
        height="527"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <style jsx>{`
        @media (max-width: 640px) {
          img {
            width: 105px;
            height: 216px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;