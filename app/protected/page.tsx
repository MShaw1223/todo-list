import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/navbar";
import { TodoType } from "@/components/DataTable/columns";
import { AddTodo } from "@/components/todos/addTodos";
import { TodoList } from "@/components/DataTable/TodoList";
import { CompletedList } from "@/components/DataTable/CompletedTodos";
import { EditTodo } from "@/components/todos/editTodos";

const tileOptions = [AddTodo, TodoList, CompletedList, EditTodo];

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
    .returns<TodoType[]>();
  return (
    <>
      <NavBar />
      <h1 className="text-3xl text-center my-4">Todo's</h1>
      <div className="animate-in flex mx-auto">
        <div className="flex-1 flex flex-wrap">
          {tileOptions.map((option, index) => (
            <div key={index} className="flex-grow border rounded-md p-2 m-1">
              {option == TodoList ? (
                <TodoList todo={todos!} />
              ) : option == CompletedList ? (
                <CompletedList todo={todos!} />
              ) : option == EditTodo ? (
                <EditTodo todos={todos!} />
              ) : (
                <AddTodo />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
