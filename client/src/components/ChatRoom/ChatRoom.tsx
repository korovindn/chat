import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../../hooks/useChat";
import { useAppSelector } from "../../redux/hooks";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";

export const ChatRoom = () => {
  const { roomId } = useParams();
  const { userName, message, rooms } = useAppSelector((state) => state);
  const { users, messages, sendMessage } = useChat(roomId, userName);
  const room = useMemo(
    () => rooms.find((room) => room.roomId === roomId),
    [roomId]
  );

  return (
    <>
      {room?.name}
      <div>
        {messages.map((message) => (
          <div key={message.messageId}>
            {message.userName}: {message.text}
          </div>
        ))}
      </div>
      <Input />
      <Button onClick={() => sendMessage(message)}>Отправлить</Button>
    </>
  );
};
