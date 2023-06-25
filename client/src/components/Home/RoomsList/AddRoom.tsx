import { useState } from "react";
import { Button } from "../../shared/Button/Button";
import classes from "./AddRoom.module.scss";
import { AddRoomForm } from "./AddRoomForm";

export const AddRoom: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div className={classes.add__wrapper}>
      <Button className={classes.add__button} primary onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? "- Отмена" : "+ Создать свою"}
      </Button>
      {formVisible ? (
        <div>
          <AddRoomForm />
        </div>
      ) : null}
    </div>
  );
};
