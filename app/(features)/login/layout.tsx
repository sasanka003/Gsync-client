import LoginNav from "./components/LoginNav";
import CreateAccount from "./components/CreateAccount";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoginNav />
      {children}
      <CreateAccount />
    </div>
  );
}
