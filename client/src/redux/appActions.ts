import { Dispatch } from "redux";
import { SET_ROOMS, SET_USERNAME } from "./appActionTypes";

export const fetchRooms = () => (dispatch: Dispatch) =>
  fetch("http://localhost:4000/rooms")
    .then((res) => res.json())
    .then((rooms) => dispatch({ type: SET_ROOMS, payload: { rooms } }));

export const setUserName = (userName: string) => ({
  type: SET_USERNAME,
  payload: { userName },
});
