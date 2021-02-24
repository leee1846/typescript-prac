import React from "react";
import TodoListItem from "./TodoListItem";
//types

const todos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "coding", complete: false },
];

const App: React.FC = () => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default App;
