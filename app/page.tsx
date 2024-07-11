import About from "@/components/layouts/About";
import Hero from "@/components/layouts/Hero";
import { createClient } from "@/utils/supabase/server";


export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <div className="flex-1 w-full flex flex-col gap-8 items-center mt-8">
      <Hero />
    </div>
  );
}
