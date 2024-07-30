import React from "react";
import FeaturesComponent from "../components/FeaturesComponent";

const Plans: React.FC = () => {
  return (
    <div className="w-auto p-4">
      <div className="mb-10">
        <div className="text-h1 text-center text-common">Features</div>
        <p className="text-center text-text">
        Explore our unique and powerful features.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[40px] md:gap-[100px] lg:gap-[202px]">
        <div className="flex flex-col space-y-4">
          <FeaturesComponent
            title="Condition Monitoring"
            content="Track and analyze soil and plant conditions to ensure optimal growth and timely interventions."
          />
          <FeaturesComponent
            title="Yield Optimization"
            content="Maximize crop yield with precision farming techniques and data-driven recommendations."
          />
          <FeaturesComponent
            title="Disease & Pest Control"
            content="Early detection of plant diseases and pests to protect your crops."
          />
        </div>
        <div className="flex flex-col space-y-4">
          <FeaturesComponent
            title="AI Assitant"
            content="Get real-time assistance and data-driven guidance from your AI-powered Assistant."
          />
          <FeaturesComponent
            title="Expert Support"
            content="Connect with agricultural specialists for personalized support and recommendations."
          />
          <FeaturesComponent
            title="Collaboration Platform"
            content="Collaborate with peers and specialists to improve your gardening skills and outcomes."
          />
        </div>
      </div>
    </div>
  );
};

export default Plans;
