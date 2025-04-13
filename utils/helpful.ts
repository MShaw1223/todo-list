import * as React from "react";

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

type payload = {
  header: string;
  body: string;
};

interface BaseTodo {
  body: string;
  header: string;
}

interface TodoType {
  id: number;
  complete: boolean;
  body: string;
  header: string;
}

export { useMediaQuery, type payload, type BaseTodo, type TodoType };
