"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SetNewCompleteState } from "@/app/protected/actions";

export type tableType = {
  id: number;
  complete: boolean;
  body: string;
  header: string;
};

export const columns: ColumnDef<tableType>[] = [
  {
    accessorKey: "complete",
    header: "Complete",
  },
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
      const r = row.original;
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
              onClick={() => {
                SetNewCompleteState(!r.complete, r);
              }}
            >
              Mark as
              {row.original.complete === true ? " not Complete" : " Complete"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
