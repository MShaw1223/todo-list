import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import TodoListPage from "@/components/todos/TodoListPage";
import { AddTodo } from "@/components/todos/addTodos";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="animate-in flex-1 flex flex-col gap-20 min-w-xl px-3">
      <main className="flex-1 flex flex-col gap-6">
        <TodoListPage />
        <AddTodo user={user} />
      </main>
    </div>
  );
}
