import { useRef } from "react";
import { Message } from "../../types/types";
import classes from "./Messages.module.scss";
import { useScroll } from "./hooks/useScroll";

interface MessagesProps {
  messages: Message[];
  userId: string;
}

export const Messages: React.FC<MessagesProps> = ({ messages, userId }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  useScroll(boxRef, [messages]);
  return (
    <div ref={boxRef} className={classes.messages}>
      {messages.map((message) => (
        <div
          key={message.messageId}
          className={`${classes.messages__wrapper} ${
            message.userId === userId ? classes["messages__wrapper--my"] : ""
          }`}
        >
          <div
            className={`${classes.messages__item} ${
              message.userId === userId ? classes["messages__item--my"] : ""
            }`}
          >
            <div className={classes.messages__author}>{message.userName}</div>
            <p className={classes.messages__text}>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
