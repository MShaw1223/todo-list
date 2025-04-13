"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Check, MoreHorizontal, Trash, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DeleteTodo, SetNewCompleteState } from "@/app/protected/actions";

export type TodoType = {
  id: number;
  complete: boolean;
  body: string;
  header: string;
};

export const columns: ColumnDef<TodoType>[] = [
  // {
  //   accessorKey: "complete",
  //   header: "Complete",
  // },
  {
    accessorKey: "header",
    header: "Header",
  },
  {
    accessorKey: "body",
    header: "Body",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={async () => {
                await SetNewCompleteState(!row.original.complete, row.original);
                window.location.reload();
              }}
              className="justify-between"
            >
              Mark
              {row.original.complete === true ? " Incomplete" : " Complete"}
              {row.original.complete === true ? <X /> : <Check />}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                await DeleteTodo(row.original.id);
                window.location.reload();
              }}
              className="justify-between"
            >
              Delete Todo
              <Trash />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
