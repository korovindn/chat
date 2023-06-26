import { Link } from "react-router-dom";
import { Room } from "../../../types/types";
import classes from "./RoomsItem.module.scss";
import { SERVER_URL } from "../../../config";

interface RoomsItemProps {
  room: Room;
}

export const RoomsItem: React.FC<RoomsItemProps> = ({ room }) => {
  return (
    <Link className={classes.item} to={`/rooms/${room.roomId}`}>
      <li className={classes.item__li}>
        <div
          className={classes.item__image}
          style={{
            backgroundImage: room.img
              ? `url("${SERVER_URL}${room.img}")`
              : undefined,
          }}
        >
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
