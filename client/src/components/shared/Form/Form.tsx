import React, { FormHTMLAttributes, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import classes from "./Form.module.scss"

type Rule = (data: { [key: string]: any }, value: string) => boolean;

interface Field {
  name: string;
  label: string;
  children: ReactElement;
  validations?: Rule[];
  propName?: string;
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  fields: Field[];
  onOk: (data: { [key: string]: any }) => void;
}

export const Form: React.FC<FormProps> = ({ fields, onOk, ...props }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form {...props} onSubmit={handleSubmit(onOk)} className={`${classes.form} ${props.className}`}>
      {fields.map((field) => (
        <div key={field.name} className={classes.form__item}>
          <label>
            <div className={classes.form__label}>{field.label}</div>
            {React.cloneElement(field.children, {...register(field.name), className: classes.form__input})}
          </label>
        </div>
      ))}
      <Button primary>Готово</Button>
    </form>
  );
};
