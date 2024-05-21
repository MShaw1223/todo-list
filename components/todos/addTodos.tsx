"use client";
import { PostTodo } from "@/app/protected/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const AddTodo = () => {
  return (
    <>
      <h1 className="mb-2">Add a todo</h1>
      <div className="text-center flex flex-wrap min-w-[250px]">
        <form className="flex-grow space-y-2">
          <Input
            className="bg-accent/30"
            placeholder="To-do title"
            name="head"
            required
          />
          <Input
            className="bg-accent/30"
            placeholder="more details"
            name="body"
            required
          />
          <Button
            variant="outline"
            className="text-accent-foreground"
            formAction={PostTodo}
          >
            Add
          </Button>
        </form>
      </div>
    </>
  );
};
