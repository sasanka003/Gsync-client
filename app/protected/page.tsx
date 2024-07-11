import AuthButton from "@/components/AuthButton";
import Features from "@/app/(features)/Home/layouts/Features";
import Hero from "@/app/(features)/Home/layouts/Hero";
import Posts from "@/components/layouts/Posts";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
          </div>
        </div>
        <Hero />
        <Posts />
        <Features />
      </div>
    </div>
  );
}
