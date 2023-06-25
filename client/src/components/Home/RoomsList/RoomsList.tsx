import classes from "./RoomsList.module.scss";
import { useEffect, useMemo, useState } from "react";
import { fetchRooms } from "../../../redux/appActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RoomsItem } from "./RoomsItem";
import { AddRoom } from "./AddRoom";
import { Input } from "../../shared/Input/Input";
import { Empty } from "../../shared/Empty/Empty";

export const RoomsList: React.FC = () => {
  const { rooms } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const filteredRooms = useMemo(
    () =>
      rooms.filter(
        (room) =>
          room.name.toLowerCase().includes(query.toLowerCase()) ||
          room.description?.toLowerCase().includes(query.toLowerCase())
      ),
    [rooms, query]
  );

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  return (
    <>
      <Input
        placeholder="Поиск..."
        className={classes.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={!rooms.length}
      />
      <ul className={classes.list}>
        {filteredRooms.length ? (
          filteredRooms.map((room) => (
            <RoomsItem key={room.roomId} room={room} />
          ))
        ) : (
          <Empty message="Комнат пока нет"/>
        )}
      </ul>
      <AddRoom />
    </>
  );
};
