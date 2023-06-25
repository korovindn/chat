import { Message } from "../../db/models/messageModel.js";

const messages = {};

export const registerMessageHandlers = (io, socket) => {
  const { roomId } = socket;
  const emitMessages = () => {
    io.to(roomId).emit("messages:update", messages[roomId]);
  };
  socket.on("messages:get", async () => {
    try {
      const dbMessages = await Message.find({
        roomId,
      });
      messages[roomId] = dbMessages;
      emitMessages();
    } catch (e) {
      console.error(e);
    }
  });
  socket.on("messages:add", async (message) => {
    Message.create(message);
    message.createdAt = Date.now();
    messages[roomId].push(message);
    emitMessages();
  });
};
