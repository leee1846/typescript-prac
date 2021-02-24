import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
//types

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "coding", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (clickedIndex) => {
    setTodos(
      todos.map((todo: Todo, index: number) => {
        if (index === clickedIndex) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos((todos) => [...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
