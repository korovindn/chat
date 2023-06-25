import { useState } from "react";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";
import classes from "./SendMessage.module.scss";

interface SendMessageProps {
  sendMessage: (text: string) => void;
}

export const SendMessage: React.FC<SendMessageProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  return (
    <form className={classes.send}>
      <Input
        value={message}
        className={classes.send__input}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        primary
        className={classes.send__button}
        onClick={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        Отправить
      </Button>
    </form>
  );
};
