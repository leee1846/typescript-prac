import React, {
  useState,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import Button from "./Button";

type AddTodoFormProps = {
  addTodo: AddTodo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo, setTodos }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCahnge = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    newTodo.trim() !== "" && addTodo(newTodo);
    setNewTodo("");
  };

  const deleteList = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodos((todos) => todos.filter((todo) => todo.complete === false));
  };

  return (
    <form>
      <input type='text' onChange={handleCahnge} value={newTodo} />
      <Button clickEvent={handleSubmit}>add todo</Button>
      <Button clickEvent={deleteList}>삭제</Button>
    </form>
  );
};

export default AddTodoForm;
