import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
//types

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "coding", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (clickedIndex: number) => {
    setTodos(
      todos.map((todo: Todo, index: number) => {
        if (index === clickedIndex) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };

  return (
    <>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} index={index} />
      ))}
    </>
  );
};

export default App;
