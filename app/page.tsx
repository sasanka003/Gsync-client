import { createClient } from "@/utils/supabase/server";
import Hero from "./(features)/Home/layouts/Hero";
import About from "./(features)/Home/layouts/About";
import Features from "./(features)/Home/layouts/Features";
import Plans from "./(features)/Home/layouts/Plans";
import Contact from "./(features)/Home/layouts/Contact";
import Navbar from "@/components/layouts/Navbar";

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
    <>
      <Navbar />
      <div className="flex-1 w-full flex flex-col gap-16 items-center mt-8 mb-10">
        <Hero />
        <About />
        <Features />
        <Plans />
        <Contact />
      </div>
    </>
  );
}
