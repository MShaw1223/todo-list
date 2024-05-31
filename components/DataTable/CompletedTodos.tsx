"use client";
import { columns, tableType } from "../DataTable/columns";
import { DataTable } from "./DataTable";

export default function CompletedList({ todo }: { todo: tableType[] }) {
  const Complete = todo.filter((todos) => todos.complete !== false);
  return (
    <>
      <h1 className="mb-2">Completed Todos</h1>
      <DataTable columns={columns} data={Complete} />
    </>
  );
}
