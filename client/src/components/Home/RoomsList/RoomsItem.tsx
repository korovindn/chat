import { Link } from "react-router-dom";
import { Room } from "../../../types/types";
import classes from "./RoomsItem.module.scss";

interface RoomsItemProps {
  room: Room;
}

export const RoomsItem: React.FC<RoomsItemProps> = ({ room }) => {
  return (
    <Link className={classes.item} key={room.roomId} to={`/rooms/${room.roomId}`}>
      <li className={classes.item__li}>
        <div className={classes.item__image}>
          {room.img ? "" : room.name[0].toUpperCase()}
        </div>
        <div>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
        </div>
      </li>
    </Link>
  );
};
