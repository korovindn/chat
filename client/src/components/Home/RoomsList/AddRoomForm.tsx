import classes from "./AddRoomForm.module.scss";
import { Input } from "../../shared/Input/Input";
import { Form } from "../../shared/Form/Form";
import { Textarea } from "../../shared/Textarea/Textarea";
import { useAppDispatch } from "../../../redux/hooks";
import { addRoom } from "../../../redux/appActions";
import { Room } from "../../../types/types";

export const AddRoomForm: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.add__wrapper}>
      <h3>Добавление комнаты</h3>
      <Form
        fields={[
          {
            name: "name",
            label: "Имя",
            children: <Input />,
          },
          {
            name: "description",
            label: "Описание",
            children: <Textarea />,
          },
          {
            name: "picture",
            label: "Изображение",
            children: <input type="file" />,
          },
        ]}
        onOk={(data) => {
          const formData = new FormData();
          formData.append("picture", data.picture[0]);
          fetch("/api/upload", {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then(({ path }) =>
              dispatch(addRoom({ ...data, img: path } as Room))
            );
        }}
      />
    </div>
  );
};
