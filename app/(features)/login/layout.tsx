import LoginNav from "./components/LoginNav";
import PostCard3 from "../../../components/PostCard3";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoginNav />
      {children}
      <PostCard3 />
    </div>
  );
}
