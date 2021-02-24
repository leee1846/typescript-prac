import React, { useState, ChangeEvent } from "react";

type AddTodoFormProps = {};

const AddTodoForm: React.FC<AddTodoFormProps> = ({}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCahnge = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <form>
      <input type='text' onChange={handleCahnge} value={newTodo} />
      <button>add todo</button>
    </form>
  );
};

export default AddTodoForm;
