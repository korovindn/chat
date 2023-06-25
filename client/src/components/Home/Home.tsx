import { UserNameInput } from "./UserNameInput/UserNameInput";
import { RoomsList } from "./RoomsList/RoomsList";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.home}>
      <h3>Введите имя: </h3>
      <UserNameInput />
      <h3>Выберите комнату: </h3>
      <RoomsList />
    </div>
  );
};
