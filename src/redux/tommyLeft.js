import { initialState } from "./initialState";

export function tommyLeft(state = initialState, action) {
  switch (action.type) {
    // case "TOMMY_LEFT":
    //   return { ...state, tommyLeft: state.tommyLeft - 10 };
    default:
      return state;
  }
}
