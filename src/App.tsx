import React from "react";
import TodoListItem from "./TodoListItem";

type Todo = {
  text: string;
  complete: boolean;
};

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
