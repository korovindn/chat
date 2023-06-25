import { setUserName } from "../../../redux/appActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Input } from "../../shared/Input/Input";
import classes from "./UserNameInput.module.scss";

export const UserNameInput = () => {
  const { userName } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <Input
      className={classes.input}
      value={userName}
      onChange={(e) => dispatch(setUserName(e.target.value))}
    />
  );
};
