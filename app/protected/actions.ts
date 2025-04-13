"use server";
import { BaseTodo, TodoType } from "@/utils/helpful";
import { createClient } from "@/utils/supabase/server";

export const PostTodo = async (data: BaseTodo) => {
  const header = data.header;
  const body = data.body;
  const supabase = createClient();

  const { error } = await supabase.from("todos").insert({
    header,
    body,
  });
  if (error) {
    console.error("error", error);
  }
};

export const SetNewCompleteState = async (
  complete: boolean,
  data: TodoType
) => {
  const supabase = createClient();
  const id = data.id;
  const { error } = await supabase
    .from("todos")
    .update({
      complete,
    })
    .eq("id", id);
  if (error) {
    console.error("error", error);
  }
};

export const DeleteTodo = async (id: number) => {
  const supabase = createClient();
  const { error } = await supabase.from("todos").delete().eq("id", id);
  if (error) {
    console.error("error", error);
  }
};

export const UpdateTodo = async (id: number, header: string, body: string) => {
  const supabase = createClient();

  const { error } = await supabase
    .from("todos")
    .update({ header, body })
    .eq("id", id);
  if (error) {
    console.error("error", error);
  }
};
