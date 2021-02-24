type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (clickedIndex: number) => void;
