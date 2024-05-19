import { extractBody } from "@/utils/helpful";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const reqBody = await extractBody(req);
    const supabase = createClient();
    const header = reqBody.header;
    const body = reqBody.body;
    const user_id = reqBody.user_id;
    console.log("head", header);
    console.log("bod", body);
    console.log("uid ", user_id);
    const { error } = await supabase
      .from("todos")
      .insert({
        header: header,
        body: body,
        user_id: user_id,
      })
      .select();
    if (error) {
      throw error;
    }
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const id = user.id;
      console.log(user.id);
      const { data: todos } = await supabase
        .from("todos")
        .select()
        .eq("user_id", id);
      console.log(todos);
      return NextResponse.json({ data: todos }, { status: 200 });
    }
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
}
