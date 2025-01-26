import { counterReducer } from "src/reducers/counterReducer";
import { createStore } from "src/store/createStore/createStore";

describe("createStore", () => {
  const { dispatch, subscribe, getState } = createStore(counterReducer);
  const mock = jest.fn();
  const unsubscribe = subscribe(mock);

  it("emits subscription callbacks", () => {
    dispatch({ type: "INCREMENT" });

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("updates state", () => {
    const { count } = getState();

    expect(count).toEqual(1);
  });

  it("does not emit subscription callbacks on unsubscribe", () => {
    unsubscribe();
    dispatch({ type: "DECREMENT" });

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
