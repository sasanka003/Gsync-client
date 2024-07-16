import React from "react";
import PlanCard from "../components/PlanCard";
import { CrownIcon, RocketIcon, TagIcon } from "../../../../components/Icons";
const Plans: React.FC = () => {
  const plans = [
    {
      icon: <TagIcon />,
      title: "Basic",
      price: "Free",
      features: [
        "Expert support & Connectivity with Gsync community",
        "Smart & Real-time guidance with AI Assistant*",
        <span style={{ color: 'var(--grey)' }}>Connect plantations with IoT devices</span>,
        <span style={{ color: 'var(--grey)' }}>Data driven crop productivity enhancement</span>,
        <span style={{ color: 'var(--grey)' }}>Complete analytical & automation control</span>,
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
        <p className="text-p">Explore the ideal plan which suits your purpose</p>
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
    </div>
  );
};

export default Plans;
