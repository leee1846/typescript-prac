import React, { useState, ChangeEvent, FormEvent } from "react";

type AddTodoFormProps = {
  addTodo: AddTodo;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCahnge = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type='text' onChange={handleCahnge} value={newTodo} />
      <button onClick={handleSubmit}>add todo</button>
    </form>
  );
};

export default AddTodoForm;
