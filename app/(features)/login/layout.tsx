import LoginNav from "./components/LoginNav";

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
