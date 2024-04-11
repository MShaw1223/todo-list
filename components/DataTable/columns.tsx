"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type tableType = {
  todoid: number;
  status: "Pending" | "Complete";
  body: string;
  header: string;
};

export const columns: ColumnDef<tableType>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "header",
    header: "Header",
  },
  {
    accessorKey: "body",
    header: "Body",
  },
];
