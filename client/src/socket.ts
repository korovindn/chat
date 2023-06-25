import { io, ManagerOptions, SocketOptions } from "socket.io-client";

const URL = "http://localhost:4000";

export const webSocketConnect = (
  options: Partial<SocketOptions & ManagerOptions>
) => io(URL, options);
