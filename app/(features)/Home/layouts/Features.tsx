import React from "react";
import FeaturesComponent from "../components/FeaturesComponent";

const Plans: React.FC = () => {
  return (
    <div className="w-auto p-4">
      <div className="mb-10">
        <div className="text-h1 text-center text-common">Features</div>
        <p className="text-center text-text">
          A phrase about Gsync’s unique features
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[40px] md:gap-[100px] lg:gap-[202px]">
        <div className="flex flex-col space-y-4">
          <FeaturesComponent
            title="Condition Monitoring"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FeaturesComponent
            title="Yield Optimization"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FeaturesComponent
            title="Disease and pest Control"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
        <div className="flex flex-col space-y-4">
          <FeaturesComponent
            title="Expert Support"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FeaturesComponent
            title="Collaboration Platform"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FeaturesComponent
            title="Another Feature"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
      </div>
    </div>
  );
};

export default Plans;
