"use client";
import { PostTodo } from "@/app/protected/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sleep } from "@/utils/helpful";
import { Plus } from "lucide-react";

export const AddTodo = () => {
  return (
    <>
      <h1 className="mb-2">Add a todo</h1>
      <div className="text-center flex flex-wrap min-w-[250px]">
        <form className="flex-grow space-y-2">
          <Input
            className="bg-accent/30"
            placeholder="Title"
            name="head"
            title="Title"
            required
          />
          <Input
            className="bg-accent/30"
            placeholder="more details"
            name="body"
            title="Details"
            required
          />
          <Button
            variant="outline"
            className="text-accent-foreground justify-between"
            formAction={PostTodo}
            onClick={async () => {
              await sleep(1500);
              window.location.reload();
            }}
          >
            Add
            <Plus />
          </Button>
        </form>
      </div>
    </>
  );
};
