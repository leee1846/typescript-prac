import { FormEvent } from "react";

type ButtonProps = {
  clickEvent: ButtonClick;
};

const Button: React.FC<ButtonProps> = ({ children, clickEvent }) => {
  return <button onClick={clickEvent}>{children}</button>;
};

export default Button;
