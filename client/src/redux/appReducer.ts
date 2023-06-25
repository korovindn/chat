import { AnyAction } from "redux";
import { SET_ROOMS, SET_MESSAGE, SET_MESSAGES, SET_USERNAME } from "./appActionTypes";
import { AppState } from "../types/types";
import { randomName } from "../utils/randomName";

const initialState: AppState = {
  rooms: [],
  userName: randomName(),
  messages: [],
  message: "",
};

export const appReducer = (
  state: AppState = initialState,
  action: AnyAction
): AppState => {
  switch (action.type) {
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
      };
    case SET_USERNAME:
      return {
        ...state,
        userName: action.payload.userName,
      }
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
