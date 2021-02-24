import React from "react";

type TodoListItemProps = {
  todo: Todo;
  toggleTodo: ToggleTodo;
  index: number;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  index,
}) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={(e) => toggleTodo(index)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
