"use client";
import { columns, TodoType } from "../DataTable/columns";
import { DataTable } from "./DataTable";

export const CompletedList = ({ todo }: { todo: TodoType[] }) => {
  const Complete = todo.filter((todos) => todos.complete !== false);
  return (
    <>
      <h1 className="mb-2">Completed Todos</h1>
      <DataTable columns={columns} data={Complete} />
    </>
  );
};
