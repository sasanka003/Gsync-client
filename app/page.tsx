import Hero from "@/app/(features)/home/layouts/Hero";
import { createClient } from "@/utils/supabase/server";
import About from "./(features)/home/layouts/About";
import Features from "./(features)/home/layouts/Features";
import Plans from "./(features)/home/layouts/Plans";
import Contact from "./(features)/home/layouts/Contact";

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
    <div className="flex-1 w-full flex flex-col gap-16 items-center mt-8 mb-10">
      <Hero />
      <About />
      <Features />
      <Plans />
      <Contact />
    </div>
  );
}
