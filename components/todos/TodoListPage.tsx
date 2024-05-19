"use client";
import { columns, tableType } from "../DataTable/columns";
import { DataTable } from "../DataTable/DataTable";
import { useEffect, useState } from "react";

export default function TodoListPage() {
  const [todos, setTodos] = useState<tableType[]>([]);

  useEffect(() => {
    async function getTodos() {
      const todoGet = await fetch("/protected/api", {
        method: "GET",
      });
      const x = await todoGet.json();
      console.log(x);
      const formattedTodos: tableType[] = x;
      setTodos(formattedTodos);
    }
    getTodos();
  }, []);
  return (
    <>
      <DataTable columns={columns} data={todos} />
    </>
  );
}
