import React from "react";

type TodoListItemProps = {
  todo: {
    text: string;
    complete: boolean;
  };
};

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type='checkbox' checked={todo.complete} />
        {todo.complete}
      </label>
    </li>
  );
};

export default TodoListItem;
