import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const supabase = createClient();

  // Get current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If no session, redirect to login
  if (!session) {
    redirect("/login");
  }

  // Check if the userId in URL matches the logged in user
  if (session.user.id !== params.userId) {
    redirect(`/${session.user.id}/dashboard`);
  }

  return <>{children}</>;
}
