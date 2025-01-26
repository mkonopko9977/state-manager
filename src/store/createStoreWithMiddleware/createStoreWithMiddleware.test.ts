import { counterReducer } from "src/reducers/counterReducer";
import { createStoreWithMiddleware } from "src/store/createStoreWithMiddleware/createStoreWithMiddleware";

// @ts-ignore
const mock = jest.fn();
// @ts-ignore
export const logger = (store) => (next) => mock;

describe("createStoreWithMiddleware", () => {
  const { dispatch, subscribe } = createStoreWithMiddleware(counterReducer, [
    logger,
  ]);

  subscribe(() => {});

  it("invokes middleware function", () => {
    dispatch({ type: "INCREMENT" });

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
