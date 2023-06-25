import classes from "./Empty.module.scss";

interface EmptyProps {
  message?: string
}

export const Empty: React.FC<EmptyProps> = ({message}) => {
  return <div className={classes.empty}>{message ?? "Нет данных"}</div>;
};
