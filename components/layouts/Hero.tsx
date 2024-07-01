import React from "react";

const Hero: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="text-h1">Your plants need to be</div>
            <div className="text-h1 text-center">Taken care of.</div>
            <img src="/images/Hero_image.png" alt="Hero" width="256px" height="527px" />
        </div>
    );
};

export default Hero;