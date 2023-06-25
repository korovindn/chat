import { TextareaHTMLAttributes, forwardRef } from "react";
import classes from "./Textarea.module.scss";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={`${classes.textarea} ${props.className}`}
    ></textarea>
  );
});
