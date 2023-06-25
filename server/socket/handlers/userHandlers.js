const users = {};

export const registerUserHandlers = (io, socket) => {
  const { roomId } = socket;
  const emitUsers = () => {
    io.to(roomId).emit("users:update", users[roomId]);
  };
  socket.on("users:add", async (user) => {
    user.socketId = socket.id;
    users[roomId].push(user);
    emitUsers();
  });
  socket.on("disconnect", () => {
    if (!users[roomId]) return;
    users[roomId] = users[roomId].filter((user) => user.socketId !== socket.id);
    emitUsers();
  });
};
