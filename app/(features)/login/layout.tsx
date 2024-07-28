import LoginNav from "./components/LoginNav";
import ActiveUsers from "../../../components/ActiveUsers";
import Posts from "../../../components/layouts/Posts";
import TrendingTopics from "../../../components/TrendingTopics";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoginNav />
      {children}
      <ActiveUsers />
      <Posts/>
      <TrendingTopics />
    </div>
  );
}
