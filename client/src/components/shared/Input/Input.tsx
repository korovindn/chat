import { InputHTMLAttributes, forwardRef } from "react";
import classes from "./Input.module.scss";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`${classes.input} ${props.className}`}
    ></input>
  );
});
