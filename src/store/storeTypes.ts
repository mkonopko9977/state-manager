export type Action = {
  type: string;
  payload?: unknown;
};

export type Dispatch = (action: Action) => void;
export type Reducer<T> = (state?: T, action?: Action) => T;
export type Store<T> = {
  getState: () => T;
  dispatch: Dispatch;
  subscribe: (listener: VoidFunction) => VoidFunction;
};
