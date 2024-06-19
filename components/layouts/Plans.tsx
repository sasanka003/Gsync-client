import React from "react";
import PlanCard from "../PlanCard";

const Plans: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-h1">Plans</p>
        <p className="text-p">A phrase about Gsync’s subscription plans</p>
      </div>
      <div className="flex gap-6 items-start">
        <PlanCard />
      </div>
    </div>
  );
};

export default Plans;
