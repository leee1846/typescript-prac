import React from "react";
import TodoListItem from "./TodoListItem";
//types
import { Todo } from "./types";

const todos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "coding", complete: false },
];

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem />
    </div>
  );
};

export default App;
