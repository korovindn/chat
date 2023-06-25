import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { webSocketConnect } from "../socket";
import { Message } from "../types/types";

export const useChat = (roomId?: string, userName?: string) => {
  const socket = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<{userName: string}[]>([]);
  useEffect(() => {
    if (roomId) {
      socket.current = webSocketConnect({ query: { roomId, userName } });
      socket.current.emit("user:add", { userName });
      socket.current.emit("messages:get");
      socket.current.on("messages:update", (messages: Message[]) =>
        setMessages(messages)
      );
      socket.current.on("users:update", (users: {userName: string}[]) => setUsers(users));
      return () => {
        socket.current?.disconnect();
      };
    }
  }, [roomId, userName]);
  const sendMessage = (message: string) => {
    if (userName && roomId)
      socket.current?.emit("messages:add", { text: message, userName, roomId });
  };
  return { users, messages, sendMessage };
};
