import React from "react";

interface FeaturesProps {
    title?: string |number;
    content?: string;
}

const FeaturesComponent: React.FC<FeaturesProps> = ({ title, content}) => {
    return (
    <div>
    <div className="mt-4">
      <div className="text-h2 text-[#0E462C] w-auto max-w-[200px]">{title}</div>
      </div>
      <p className="mt-2 w-auto max-w-[380px]">{content}</p>
    </div>
    );
  };
  
  export default FeaturesComponent;
  