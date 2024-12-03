import React from "react";
import PlanCard from "../components/PlanCard";
import { CrownIcon, RocketIcon, TagIcon } from "../../../../components/Icons";

const Plans: React.FC = () => {
  const allFeatures = [
    "Expert support & Connectivity with Gsync community",
    "Smart & Real-time guidance with AI Assistant*",
    "Connect plantations with IoT devices",
    "Data driven crop productivity enhancement",
    "Complete analytical & automation control",
  ];

  const plans = [
    {
      icon: <TagIcon />,
      title: "Basic",
      price: "Free",
      features: [
        "Expert support & Connectivity with Gsync community",
        "Smart & Real-time guidance with AI Assistant*",
      ],
    },
    {
      icon: <RocketIcon />,
      title: "Gardener",
      price: "Starts from 4990LKR*",
      features: [
        "Expert support & Connectivity with Gsync community",
        "Smart & Real-time guidance with AI Assistant*",
        "Connect plantations with IoT devices",
        "Data driven crop productivity enhancement",
      ],
    },
    {
      icon: <CrownIcon />,
      title: "Enterprise",
      price: "Starts from 12000LKR*",
      features: [
        "Expert support & Connectivity with Gsync community",
        "Smart & Real-time guidance with AI Assistant*",
        "Connect plantations with IoT devices",
        "Data driven crop productivity enhancement",
        "Complete analytical & automation control",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-2">
        <p className="text-h1 mx-auto text-common">Plans</p>
        <p className="text-p">
          Explore the ideal plan which suits your purpose
        </p>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-wrap justify-center gap-6 items-start">
        {plans.map((plan) => (
          <PlanCard
            key={plan.title}
            title={plan.title}
            icon={plan.icon}
            price={plan.price}
            features={plan.features}
            availableFeatures={allFeatures}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
