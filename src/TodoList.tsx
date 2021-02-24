import React from "react";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo}
          index={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
