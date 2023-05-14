import { initialState } from "./initialState";

export function heroPosX(state = initialState.heroPosX, action) {
  switch (action.type) {
    case "MOVE_X":
      return state + 10;

    default:
      return state;
  }
}

export function heroPosY(state = initialState.heroPosY, action) {
  switch (action.type) {
    case "MOVE_Y":
      return state + 10;
    default:
      return state;
  }
}
