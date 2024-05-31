import WelcomeMessage from "@/components/Welcome";
import { NavBar } from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    redirect("/protected");
  }

  return (
    <>
      <div className="flex-1 w-full">
        <NavBar />
        <div className="animate-in flex-1 flex flex-col gap-20 px-3">
          <WelcomeMessage />
        </div>
      </div>
    </>
  );
}
