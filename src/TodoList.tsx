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
        <TodoListItem todo={todo} toggleTodo={toggleTodo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
