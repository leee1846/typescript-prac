type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (clickedIndex: number) => void;

type AddTodo = (newTodo: string) => void;

type ButtonClick = (e: FormEvent<HTMLButtonElement>) => void;
