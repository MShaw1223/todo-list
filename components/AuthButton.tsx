import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

export default async function AuthButton() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const display_name = data.user?.user_metadata?.display_name;

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    data.user && (
      <div className="flex items-center gap-4">
        Hey, {display_name ? display_name : data.user.email?.split("@")[0]}!
        <form action={signOut}>
          <Button variant="outline">Logout</Button>
        </form>
      </div>
    )
  );
}
