import { ModeToggle } from "@/components/ui/toggle";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import WelcomeMessage from "@/components/Welcome";
import Header from "@/components/Header";
export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <ModeToggle />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <WelcomeMessage />
        <main className="flex-1 flex flex-col gap-6 text-center">
          <Header />
        </main>
      </div>
    </div>
  );
}
