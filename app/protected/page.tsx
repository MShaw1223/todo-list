import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { AddTodo } from "@/components/todos/addTodos";
import { NavBar } from "@/components/navbar";
import { tableType } from "@/components/DataTable/columns";
import CompletedList from "@/components/DataTable/CompletedTodos";
import TodoList from "@/components/DataTable/TodoList";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const { data: todos } = await supabase
    .from("todos")
    .select()
    .eq("userid", user.id)
    .order("id", { ascending: true })
    .returns<tableType[]>();
  return (
    <>
      <NavBar />
      <h1 className="text-3xl text-center my-4">Todo's</h1>
      <div className="animate-in flex mx-auto">
        <div className="flex-1 flex flex-wrap gap-2">
          <div className="flex-grow border rounded-md p-3 m-2">
            <AddTodo />
          </div>
          <div className="flex-grow border rounded-md p-3 m-2">
            <TodoList todo={todos!} />
          </div>
          <div className="flex-grow border rounded-md p-3 m-2">
            <CompletedList todo={todos!} />
          </div>
        </div>
      </div>
    </>
  );
}
