//also redux boilerplate
import { initialState } from "./initialState";

export function count(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
