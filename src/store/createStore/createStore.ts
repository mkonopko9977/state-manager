import { Reducer, Store } from "src/store/storeTypes";

export const createStore: <T>(reducer: Reducer<T>) => Store<T> = (reducer) => {
  let state = reducer();
  const listeners = new Set<VoidFunction>();

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: VoidFunction) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
};
