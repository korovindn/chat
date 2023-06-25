import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ChatRoom = () => {
  const roomId = useParams();
  useEffect(() => console.log(roomId), [roomId])
  return (
    <>
      {/* room: {roomId}<br/>
      users: {users.map(user => user.userName)}
      <div>
        {messages.map((message) => (
          <div key={message.messageId}>
            {message.userName}: {message.text}
          </div>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => sendMessage(message)}>Отправлить</button> */}
    </>
  );
}