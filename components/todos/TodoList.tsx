"use client";
import { columns, tableType } from "../DataTable/columns";
import { DataTable } from "../DataTable/DataTable";

export default function TodoList({ todo }: { todo: tableType[] }) {
  return (
    <>
      <h1 className="mb-2">Todos</h1>
      <DataTable columns={columns} data={todo} />
    </>
  );
}
