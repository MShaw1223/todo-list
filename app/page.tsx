import { NavBar } from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Login from "./login/page";
export default async function Index({
  searchParams,
}: {
  searchParams: {
    message: string;
  };
}) {
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
          <Login searchParams={searchParams} />
        </div>
      </div>
    </>
  );
}
