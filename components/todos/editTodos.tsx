import { TodoType } from "../DataTable/columns";
import { ComboBox } from "../ui/combobox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const EditTodo = ({ todos }: { todos: TodoType[] }) => {
  // filter todos to incomplete
  // add this to a search select, search done by header name / body contents ; only display header / disp head & small preview text?
  return (
    <>
      <h1 className="mb-2">Edit a todo</h1>
      <div className="text-center flex flex-wrap min-w-[250px]">
        // need to access the selectedEdit????
        <ComboBox todos={todos} />
        <form>
          <Input type="text" placeholder="foobar" />
          <Textarea
            name="body"
            id="body"
            placeholder="Bazbang"
            className="resize-none"
          />
        </form>
      </div>
    </>
  );
};
