import React from "react";
import PlanCard from "../PlanCard";
import { CrownIcon, RocketIcon, TagIcon } from "../Icons";
import PlantCard from "../PlantCard";

const Plans: React.FC = () => {
  const plans = [
    {
      icon: <TagIcon />,
      title: "Basic",
      price: "Free",
      features: [
        "Subscription plan feature goes here",
        "Subscription plan feature goes here",
      ],
    },
    {
      icon: <RocketIcon />,
      title: "Gardener",
      price: "$9.99",
      features: [
        "Subscription plan feature goes here",
        "Subscription plan feature goes here",
      ],
    },
    {
      icon: <CrownIcon />,
      title: "Enterprise",
      price: "$19.99",
      features: [
        "Subscription plan feature goes here",
        "Subscription plan feature goes here",
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-2">
        <p className="text-h1 mx-auto text-common">Plans</p>
        <p className="text-p">A phrase about Gsync’s subscription plans</p>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-wrap justify-center gap-6 items-start">
        {plans.map((plan) => (
          <PlanCard
            title={plan.title!}
            icon={plan.icon}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
      <PlantCard />
    </div>
  );
};

export default Plans;
