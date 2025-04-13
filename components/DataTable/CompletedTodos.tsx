"use client";
import { TodoType } from "@/utils/helpful";
import { columns } from "../DataTable/columns";
import { DataTable } from "./DataTable";

export const CompletedList = ({ todos }: { todos: TodoType[] }) => {
  const Complete = todos.filter((td) => td.complete !== false);
  return (
    <>
      <DataTable columns={columns} data={Complete} />
    </>
  );
};
