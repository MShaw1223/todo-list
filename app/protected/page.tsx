import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/navbar";
import { TodoType } from "@/utils/helpful";
import { AddTodo } from "@/components/todos/addTodos";
import { TodoList } from "@/components/DataTable/TodoList";
import { CompletedList } from "@/components/DataTable/CompletedTodos";
import { EditTodo } from "@/components/todos/editTodos";

const tileOptions = [
  { name: "Add a todo", fn: AddTodo },
  { name: "Todo's", fn: TodoList },
  { name: "Completed Todos", fn: CompletedList },
  { name: "Edit a todo", fn: EditTodo },
];

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
      <div className="animate-in flex mx-auto">
        <div className="flex-1 flex flex-wrap mt-5">
          {tileOptions.map((option, index) => {
            const Component = option.fn;
            return (
              <div key={index} className="flex-grow border rounded-md p-2 m-1">
                <h1 className="mb-2">{option.name}</h1>
                <Component todos={todos!} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
