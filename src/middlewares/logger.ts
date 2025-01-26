import { State } from "src/reducers/counterReducer";
import { Middleware } from "src/store/createStoreWithMiddleware/createStoreWithMiddleware";

export const logger: Middleware<State> = (store) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};
