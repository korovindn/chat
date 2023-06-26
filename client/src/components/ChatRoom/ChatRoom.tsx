import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../../hooks/useChat";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";
import { Topbar } from "./Topbar";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";
import { fetchRooms } from "../../redux/appActions";

export const ChatRoom = () => {
  const { roomId } = useParams();
  const { userName, message, rooms } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  const { userId, users, messages, sendMessage } = useChat(roomId, userName);
  const room = useMemo(
    () => rooms.find((room) => room.roomId === roomId),
    [roomId, rooms]
  );

  return (
    <>
      <Topbar name={room?.name ?? ""} />
      <Messages messages={messages} userId={userId} />
      <SendMessage sendMessage={sendMessage} />
    </>
  );
};
