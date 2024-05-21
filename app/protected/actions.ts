"use server";
import { createClient } from "@/utils/supabase/server";

export const PostTodo = async (formData: FormData) => {
  const header = formData.get("head") as string;
  const body = formData.get("body") as string;
  const supabase = createClient();

  const { error } = await supabase.from("todos").insert({
    header,
    body,
  });
  if (error) {
    console.error("error", error);
  }
};
