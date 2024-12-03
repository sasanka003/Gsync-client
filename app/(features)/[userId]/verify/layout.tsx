import NavBar from "@/components/layouts/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <main className="pt-20 container mx-auto px-4">{children}</main>
    </div>
  );
}
