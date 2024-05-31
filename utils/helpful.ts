import { User } from "@supabase/supabase-js";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

async function extractBody(
  req: NextRequest | NextApiRequest | Request | Response
) {
  try {
    if (!req.body) {
      return null;
    }

    const decoder = new TextDecoder();

    const reader = req.body.getReader();

    let body = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        try {
          return JSON.parse(body);
        } catch (e) {
          console.error(e);
          return null;
        }
      }
      body = body + decoder.decode(value);
    }
  } catch (error) {
    console.error("Error extracting body:", error);
  }
}

type payload = {
  header: string;
  body: string;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export { extractBody, type payload, sleep };
