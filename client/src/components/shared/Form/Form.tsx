import React, { FormHTMLAttributes, ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button/Button";

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
    <form {...props} onSubmit={handleSubmit(onOk)}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            <div>{field.label}</div>
            {React.cloneElement(field.children, register(field.name))}
          </label>
        </div>
      ))}
      <Button primary>Готово</Button>
    </form>
  );
};
