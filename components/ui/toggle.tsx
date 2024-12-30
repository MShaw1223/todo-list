"use client";

import * as React from "react";
import { LucideBlocks, Moon, Settings, Settings2, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

export function Toggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="justify-between">
          <Settings2 className="h-[1.2rem] w-[1.2rem] mr-3" />
          User settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="justify-between"
              >
                <Moon className="h-[1.2rem] w-[1.2rem]" />
                dark
              </DropdownMenuItem>
              <DropdownMenuSeparator aria-orientation="horizontal" />
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="justify-between"
              >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                light
              </DropdownMenuItem>
              <DropdownMenuSeparator aria-orientation="horizontal" />
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="justify-between"
              >
                <LucideBlocks className="h-[1.2rem] w-[1.2rem]" />
                system
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
