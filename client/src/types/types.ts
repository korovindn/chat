export interface Room {
  roomId: string;
  name: string;
  description: string;
  img?: string;
}

export interface Message {
  messageId: string;
  userName: string;
  text: string;
}

export interface AppState {
  rooms: Room[];
  userName: string;
  messages: Message[];
  message: string;
}