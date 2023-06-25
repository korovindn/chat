import { Server } from "socket.io";
import { ALLOWED_ORIGIN } from "../config.js";
import { registerMessageHandlers } from "./handlers/messageHandlers.js";
import { registerUserHandlers } from "./handlers/userHandlers.js";

export const connectSocket = (server) => {
  const io = new Server(server, {
    cors: ALLOWED_ORIGIN,
    serveClient: false,
  });

  io.on("connection", (socket) => {
    const { roomId, userName } = socket.handshake.query;
    socket.roomId = roomId;
    socket.userName = userName;
    socket.join(roomId);
    registerMessageHandlers(io, socket);
    registerUserHandlers(io, socket);
    console.log(`🔌 User ${userName} connected`);
  });
};
