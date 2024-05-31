"use client";
import { columns, tableType } from "../DataTable/columns";
import { DataTable } from "./DataTable";

export default function TodoList({ todo }: { todo: tableType[] }) {
  const notComplete = todo.filter((todos) => todos.complete === false);
  return (
    <>
      <h1 className="mb-2">Todos</h1>
      <DataTable columns={columns} data={notComplete} />
    </>
  );
}
