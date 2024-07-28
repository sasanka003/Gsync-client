import LoginNav from "./components/LoginNav";
import PostCard2 from "@/components/PostCard2";
import Posts from "../../../components/layouts/Posts";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoginNav />
      {children}
     <Posts/>
    </div>
  );
}
