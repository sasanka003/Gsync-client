import LoginNav from "./components/LoginNav";
import NotificationCard from "../../../components/NotificaionCard";
import UpgradeAccountCard from "@/components/UpgradeAccountCard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoginNav />
      {children}
    </div>
  );
}
