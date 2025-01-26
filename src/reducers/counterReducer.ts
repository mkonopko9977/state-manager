import { Reducer } from "src/store/storeTypes";

export type State = { count: number };

export const counterReducer: Reducer<State> = (
  state = { count: 0 },
  { type } = { type: "DEFAULT" }
) => {
  const { count } = state;
  switch (type) {
    case "INCREMENT":
      return { count: count + 1 };
    case "DECREMENT":
      return { count: count - 1 };
    default:
      return state;
  }
};
