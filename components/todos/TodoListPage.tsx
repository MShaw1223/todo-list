import { createClient } from "@/utils/supabase/server";
import { columns, tableType } from "../DataTable/columns";
import { DataTable } from "../DataTable/DataTable";

async function GetData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: todos } = await supabase
    .from("todos")
    .select("*")
    .eq("userid", user?.id);
  const formattedTodos: tableType[] = todos!.map((todo: any) => ({
    todoid: todo.todoid,
    status: todo.status,
    body: todo.body,
    header: todo.header,
  }));
  return formattedTodos;
}

export default async function TodoListPage() {
  const todos = await GetData();
  return (
    <>
      <DataTable columns={columns} data={todos} />
    </>
  );
}
