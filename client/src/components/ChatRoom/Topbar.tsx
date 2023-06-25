import { Link } from "react-router-dom";
import classes from "./Topbar.module.scss";

interface TopbarProps {
  name: string;
}

export const Topbar: React.FC<TopbarProps> = ({ name }) => {
  return <div className={classes.topbar}>
    <Link to="/" className={classes.topbar__back}>
      Назад
    </Link>
    <div className={classes.topbar__title}>
      {name}
    </div>
  </div>
};
