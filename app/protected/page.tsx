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
    <div className="animate-in mt-20 flex">
      <main className="flex-1 flex flex-wrap gap-6">
        <div className="flex-grow border rounded-md p-3">
          <TodoListPage />
        </div>
        <div className="flex-grow border rounded-md p-3">
          <AddTodo user={user} />
        </div>
      </main>
    </div>
  );
}
