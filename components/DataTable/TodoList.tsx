"use client";
import { columns, TodoType } from "../DataTable/columns";
import { DataTable } from "./DataTable";

export const TodoList = ({ todo }: { todo: TodoType[] }) => {
  const notComplete = todo.filter((todos) => todos.complete === false);
  return (
    <>
      <h1 className="mb-2">Todos</h1>
      <DataTable columns={columns} data={notComplete} />
    </>
  );
};
