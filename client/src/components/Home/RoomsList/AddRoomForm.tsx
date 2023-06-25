import { useState } from "react";
import { Button } from "../../shared/Button/Button";
import classes from "./AddRoomForm.module.scss";
import { Input } from "../../shared/Input/Input";
import { Form } from "../../shared/Form/Form";

export const AddRoomForm: React.FC = () => {
  return (
    <div className={classes.add__wrapper}>
      <Form fields={[{
        name: "hello",
        label: "hello",
        children: <Input/>
      }, {
        name: "world",
        label: "world",
        children: <select>
          <option>hello</option>
          <option>hello2</option>
        </select>
      }]}
      onOk={(data) => console.log(data)}/>
    </div>
  );
};
