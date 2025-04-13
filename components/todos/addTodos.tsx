"use client";
import { PostTodo } from "@/app/protected/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { BaseTodo, TodoType } from "@/utils/helpful";

export const AddTodo = ({ todos }: { todos: TodoType[] }) => {
  return (
    <>
      <div className="text-center flex flex-wrap min-w-[250px]">
        <form
          className="flex-grow space-y-2"
          onSubmit={async (e) => {
            e.preventDefault();
            const headerElement = document.getElementById(
              "header"
            ) as HTMLInputElement;
            const bodyElement = document.getElementById(
              "body"
            ) as HTMLInputElement;
            const payload: BaseTodo = {
              header: headerElement?.value,
              body: bodyElement?.value,
            };
            await PostTodo(payload);
            window.location.reload();
          }}
        >
          <Input
            id="header"
            className="bg-accent/30"
            placeholder="Title"
            name="head"
            title="Title"
            required
          />
          <Input
            id="body"
            className="bg-accent/30"
            placeholder="more details"
            name="body"
            title="Details"
            required
          />
          <Button
            variant="outline"
            className="text-accent-foreground justify-between"
            type="submit"
          >
            Add
            <Plus />
          </Button>
        </form>
      </div>
    </>
  );
};
