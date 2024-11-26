import { Subscription } from "@/types/plantations";
import StatusCard from "./StatusCard";

interface RequestsPendingProps {
  plantations: Array<{
    plantationName: string;
    status: string;
    // requestDate: string;
  }>;
}

export default function RequestsPending({ plantations }: RequestsPendingProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 ml-4 mb-10">
      <div className="flex space-x-4 col-span-1 lg:col-span-2">
        {plantations.map((data, index) => (
          <StatusCard
            key={index}
            plantationName={data.plantationName}
            status={data.status}
            // requestDate={data.requestDate}
          />
        ))}
      </div>
      <div className="col-span-1 lg:col-span-2 flex justify-center items-center mt-6">
        <p
          className="text-center"
          style={{ fontSize: "var(--text-h2)", color: "var(--grey)" }}
        >
          Dashboard will set up once your plantation requests have been
          approved.
        </p>
      </div>
    </div>
  );
}
