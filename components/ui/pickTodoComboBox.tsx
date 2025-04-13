"use client";

import * as React from "react";

import { useMediaQuery } from "@/utils/helpful";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit } from "lucide-react";
import { TodoType } from "@/utils/helpful";

export function ComboBox({
  todos,
  setSelectedEdit,
  selectedEdit,
}: {
  todos: TodoType[];
  setSelectedEdit: any;
  selectedEdit: TodoType | null;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // const [selectedEdit, setSelectedEdit] = React.useState<TodoType | null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-between">
            {selectedEdit ? (
              <>{selectedEdit.header}</>
            ) : (
              <>
                Pick Todo
                <Edit />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <EditList
            setOpen={setOpen}
            setSelectedEdit={setSelectedEdit}
            todos={todos}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-between">
          {selectedEdit ? (
            <>{selectedEdit.header}</>
          ) : (
            <>
              Pick Todo
              <Edit />
            </>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <EditList
            setOpen={setOpen}
            setSelectedEdit={setSelectedEdit}
            todos={todos}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function EditList({
  setOpen,
  setSelectedEdit,
  todos,
}: {
  setOpen: (open: boolean) => void;
  setSelectedEdit: (status: TodoType | null) => void;
  todos: TodoType[];
}) {
  const incompleteTodos: TodoType[] = todos.filter(
    (todo) => todo.complete !== true
  );
  const completeTodos: TodoType[] = todos.filter(
    (todo) => todo.complete === true
  );

  return (
    <Command>
      <CommandInput placeholder="Filter todos..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          Incomplete
          {incompleteTodos.map((incompleteTodo) => (
            <CommandItem
              key={incompleteTodo.header}
              value={incompleteTodo.header}
              onSelect={(value) => {
                setSelectedEdit(
                  incompleteTodos.find(
                    (incompleteTodo) => incompleteTodo.header === value
                  ) || null
                );
                setOpen(false);
              }}
            >
              {incompleteTodo.header}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          Complete
          {completeTodos.map((completeTodo) => (
            <CommandItem
              key={completeTodo.header}
              value={completeTodo.header}
              onSelect={(value) => {
                setSelectedEdit(
                  completeTodos.find(
                    (completeTodo) => completeTodo.header === value
                  ) || null
                );
                setOpen(false);
              }}
            >
              {completeTodo.header}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
