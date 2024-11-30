import React from "react";
import { Button } from "@/components/ui/button";
import StatusCard from "../requests-pending/Components/StatusCard";

const StatusCards = [
  {
    plantationName: "My Plantation 01",
    status: "in Review",
    requestDate: "03.06.2024",
  },

  {
    plantationName: "My Plantation 02",
    status: "in Review",
    requestDate: "03.05.2024",
  },
  {
    plantationName: "My Plantation 03",
    status: "in Review",
    requestDate: "03.04.2024",
  },
];

export default function PaymentPending() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 ml-4 mb-10">
      <div className="flex space-x-4 col-span-1 lg:col-span-2">
        {StatusCards.map((data, index) => (
          <StatusCard
            key={index}
            plantationName={data.plantationName}
            status={data.status}
            requestDate={data.requestDate}
          />
        ))}
      </div>
      <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center mt-6 space-y-1">
        <p
          className="text-center"
          style={{ fontSize: "var(--fs-h2)", fontWeight: "var(--fw-h2)" }}
        >
          Plantation Request Approved!
        </p>
        <p
          className="text-center"
          style={{ fontSize: "var(--text-h2)", color: "var(--grey)" }}
        >
          Please proceed with your payment to set up your plantation.
        </p>
        <Button className="mt-4">Continue to Checkout</Button>{" "}
        {/* Adds a button */}
      </div>
    </div>
  );
}
