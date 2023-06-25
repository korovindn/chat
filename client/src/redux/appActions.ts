import { Dispatch } from "redux";
import { SET_ROOMS, SET_USERNAME } from "./appActionTypes";
import { Room } from "../types/types";

export const fetchRooms = () => (dispatch: Dispatch) =>
  fetch("/api/rooms")
    .then((res) => res.json())
    .then((rooms) => dispatch({ type: SET_ROOMS, payload: { rooms } }));

export const addRoom = (data: Room) => (dispatch: Dispatch) =>
  fetch("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => {
    fetch("/api/rooms")
      .then((res) => res.json())
      .then((rooms) => dispatch({ type: SET_ROOMS, payload: { rooms } }));
  });

export const setUserName = (userName: string) => ({
  type: SET_USERNAME,
  payload: { userName },
});
