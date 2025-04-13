"use client";
import { TodoType } from "@/utils/helpful";
import { columns } from "../DataTable/columns";
import { DataTable } from "./DataTable";

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  const notComplete = todos.filter((todo) => todo.complete === false);
  return (
    <>
      <DataTable columns={columns} data={notComplete} />
    </>
  );
};
