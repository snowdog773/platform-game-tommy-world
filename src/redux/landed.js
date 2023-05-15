import { initialState } from "./initialState";

export function landed(state = initialState.landed, action) {
  switch (action.type) {
    case "LANDED":
      return true;

    case "NOT_LANDED":
      return false;

    default:
      return state;
  }
}
