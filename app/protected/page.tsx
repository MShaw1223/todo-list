import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import TodoListPage from "@/components/todos/TodoListPage";

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
      <div className="animate-in flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <TodoListPage />
        </main>
      </div>
    </div>
  );
}
