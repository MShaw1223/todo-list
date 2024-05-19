"use client";
import { User } from "@supabase/supabase-js";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

type payload = {
  data: {
    head: string;
    body: string;
  };
};

interface props {
  user: User;
}

export const AddTodo = ({ user }: props) => {
  const [taskHeader, addTaskHeader] = useState<string>("");
  const [taskBody, addTaskBody] = useState<string>("");

  const addTodo = async (taskText: payload) => {
    try {
      const x = await fetch("/protected/api", {
        method: "POST",
        body: JSON.stringify({
          header: taskText.data.head,
          body: taskText.data.body,
          user_id: user.id,
        }),
      });
      const d = await x.json();
      const dat = d.data;
      if (x.status === 200) {
        alert("Success");
      } else {
        alert("something did something");
      }
    } catch (e) {
      alert("unsure anything happened");
    }
  };
  return (
    <>
      <h1>Add a todo</h1>
      <div className="text-center flex-wrap">
        <form
          className="flex flex-grow space-x-2"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo({ data: { head: taskHeader, body: taskBody } });
          }}
        >
          <Input
            className="bg-accent/30"
            placeholder="To-do title"
            onChange={(e) => {
              addTaskHeader(e.target.value);
            }}
          />
          <Input
            className="bg-accent/30"
            placeholder="more details"
            onChange={(e) => {
              addTaskBody(e.target.value);
            }}
          />
          <Button
            variant="outline"
            className="text-accent-foreground"
            type="submit"
          >
            Add
          </Button>
        </form>
        {/* {!!errorText && <Alert text={errorText} />} */}
      </div>
    </>
  );
};
