import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  userId: string;
}

export default function BasicUserDashboard({ userId }: Props) {
  const router = useRouter();

  const handleUpgradeClick = () => {
    router.push(`/${userId}/plantation/select-plan`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 ml-4 mb-10">
      <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center mt-6 space-y-1">
        <p
          className="text-center"
          style={{ fontSize: "var(--fs-h2)", fontWeight: "var(--fw-h2)" }}
        >
          Upgrade to Add Plantation
        </p>
        <p
          className="text-center"
          style={{ fontSize: "var(--text-h2)", color: "var(--grey)" }}
        >
          Unlock advanced features, expand your planting capacity, and get
          personalized insights with our premium plans.
        </p>
        <Button className="mt-4" onClick={handleUpgradeClick}>
          Upgrade Plan
        </Button>
      </div>
    </div>
  );
}
