import ProtectedPage from "@/app/protected/page";
import { createClient } from "@/utils/supabase/server";
import Header from "./Header";

export default async function WelcomeMessage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <ProtectedPage />
  ) : (
    <>
      <Header />
      <div className="flex flex-col gap-6 text-center">
        <p className="mx-4 mr-2 font-bold text-4xl mb-4">Welcome !</p>
        <p className="mx-4 mr-2 font-bold text-4xl mb-4">
          Click login in the top right to get started
        </p>
      </div>
    </>
  );
}
