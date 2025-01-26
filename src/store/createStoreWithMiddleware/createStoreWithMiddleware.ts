import { createStore } from "src/store/createStore/createStore";
import { Store, Dispatch, Reducer } from "src/store/storeTypes";

type MiddlewareStore<T> = Pick<Store<T>, "getState">;
export type Middleware<T> = (
  store: MiddlewareStore<T>
) => (next: Dispatch) => Dispatch;

export const createStoreWithMiddleware: <T>(
  reducer: Reducer<T>,
  middlewares: Middleware<T>[]
) => Store<T> = (reducer, middlewares) => {
  const store = createStore(reducer);

  const chain = middlewares.map((middleware) =>
    middleware({
      getState: store.getState,
    })
  );

  const dispatch: Dispatch = chain.reduceRight(
    (next, middleware) => middleware(next),
    store.dispatch
  );

  return {
    ...store,
    dispatch,
  };
};
