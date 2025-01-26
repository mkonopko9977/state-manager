# State manager

The application is a showcase of a simple state management utility.
The state manager module is in the `src/store/createStore/createStore.ts` file.
Middleware support is implemented in the `src/store/createStoreWithMiddleware/createStoreWithMiddleware.ts` file.

#### Prerequisites

Before running application or tests you need to have `vite` and `jest` libraries installed globally.
To do so, run:

```
npm i -g vite jest
```

Then, install the required npm packages:

```
npm install
```

#### Running application and tests

To run the application, use:

```
npm run dev
```

To run tests, use:

```
npm run test
```

To run tests with coverage report, use:

```
npm run coverage
```

#### State manager module usage

To use the module, create a reducer:

```
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
```

Instantiate a store object using the reducer as a parameter:

```
const { dispatch, subscribe, getState } = createStore(counterReducer);
```

Subscribe to changes:

```
const unsubscribe = subscribe(() => {
  const { count } = getState();
  console.log(`Count is ${count}`);
});
```

Dispatch actions:

```
dispatch({ type: "INCREMENT" })
```

Unsubscribe:

```
unsubscribe()
```
