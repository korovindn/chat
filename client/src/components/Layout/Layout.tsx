import { PropsWithChildren } from "react";
import classes from "./Layout.module.scss";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.header__text}>Чатик</h1>
      </header>
      {children}
    </div>
  );
};
