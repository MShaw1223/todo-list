"use client";

import { ComboBox } from "../ui/pickTodoComboBox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React from "react";
import { Button } from "../ui/button";
import { UpdateTodo } from "@/app/protected/actions";
import { TodoType } from "@/utils/helpful";

export const EditTodo = ({ todos }: { todos: TodoType[] }) => {
  const [selectedEdit, setSelectedEdit] = React.useState<TodoType | null>(null);
  return (
    <>
      <div className="text-center flex flex-wrap w-full align-middle justify-center">
        {!selectedEdit && (
          <ComboBox
            todos={todos}
            setSelectedEdit={setSelectedEdit}
            selectedEdit={selectedEdit}
          />
        )}
        {selectedEdit && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (selectedEdit) {
                const header = document.getElementById(
                  "headerInput"
                ) as HTMLTextAreaElement;

                const body = document.getElementById(
                  "bodyTextArea"
                ) as HTMLInputElement;

                if (header && body)
                  await UpdateTodo(selectedEdit.id, header?.value, body?.value);

                window.location.reload();
              }
            }}
          >
            <div className="flex flex-row justify-center">
              <Input
                id="headerInput"
                type="text"
                placeholder="Header"
                defaultValue={selectedEdit?.header}
              />
              <Textarea
                name="body"
                id="bodyTextArea"
                defaultValue={selectedEdit?.body}
                placeholder="Body"
                className="resize-none"
              />
            </div>
            <div className="flex flex-row justify-center space-x-5 mt-5">
              <Button
                onClick={async () => {
                  setSelectedEdit(null);
                }}
                type="reset"
                variant="outline"
              >
                cancel
              </Button>
              <Button type="submit">submit</Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
