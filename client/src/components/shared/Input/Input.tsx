import { InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input {...props} className={`${classes.input} ${props.className}`}></input>;
};
