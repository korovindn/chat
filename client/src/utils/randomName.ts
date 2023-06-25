import { adjectives, animals } from "../constants/names";
import { randomInt } from "./randomInt";
import { upperCaseFirst } from "./upperCaseFirst";

export const randomName = () =>
  `${
    upperCaseFirst(adjectives[randomInt(0, adjectives.length - 1)])
  } ${
    upperCaseFirst(animals[randomInt(0, animals.length - 1)])
  }`;
