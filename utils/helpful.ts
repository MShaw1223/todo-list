import * as React from "react";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

async function extractBody(
  req: NextRequest | NextApiRequest | Request | Response,
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

function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

export { extractBody, type payload, sleep, useMediaQuery };
