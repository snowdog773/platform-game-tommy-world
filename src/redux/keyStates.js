import { initialState } from "./initialState";

export function keyStates(state = initialState, action) {
  switch (action.type) {
    case "A_DOWN":
      return { ...state, aHeld: true };
    case "A_UP":
      return { ...state, aHeld: false };
    case "D_DOWN":
      return { ...state, dHeld: true };
    case "D_UP":
      return { ...state, dHeld: false };
    case "S_DOWN":
      return { ...state, sHeld: true };
    case "S_UP":
      return { ...state, sHeld: false };
    case "W_DOWN":
      return { ...state, wHeld: true };
    case "W_UP":
      return { ...state, wHeld: false };

    default:
      return state;
  }
}
