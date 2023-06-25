import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ primary, ...props }) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${
        primary ? classes["button--primary"] : ""
      } ${props.className}`}
    ></button>
  );
};
