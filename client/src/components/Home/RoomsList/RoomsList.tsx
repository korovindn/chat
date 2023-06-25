import { Link } from "react-router-dom";
import classes from "./RoomsList.module.scss";
import { useEffect } from "react";
import { fetchRooms } from "../../../redux/appActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RoomsItem } from "./RoomsItem";

export const RoomsList: React.FC = () => {
  const { rooms } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  return (
    <ul className={classes.list}>
      {rooms.map((room) => (
        <RoomsItem room={room} />
      ))}
      
    </ul>
  );
};
