import { io, ManagerOptions, SocketOptions } from "socket.io-client";
import { SERVER_URL } from "./config";

export const webSocketConnect = (
  options: Partial<SocketOptions & ManagerOptions>
) => io(SERVER_URL, options);
