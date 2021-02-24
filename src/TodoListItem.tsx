import React from "react";

type TodoListItemProps = {
  todo: Todo;
  toggleTodo: (clickedIndex: number) => void;
  index: number;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  index,
}) => {
  return (
    <li onClick={(e) => toggleTodo(index)}>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input type='checkbox' checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
