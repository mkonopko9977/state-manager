import { counterReducer } from "src/reducers/counterReducer";
import { logger } from "src/middlewares/logger";
// import { createStore } from "src/store/createStore";
import { createStoreWithMiddleware } from "src/store/createStoreWithMiddleware/createStoreWithMiddleware";

const countDiv = document.querySelector<HTMLDivElement>("#count")!;
const increaseButton = document.querySelector<HTMLButtonElement>("#increase")!;
const decreaseButton = document.querySelector<HTMLButtonElement>("#decrease")!;
// uncomment to use the store without middleware
// const { dispatch, subscribe, getState } = createStore(counterReducer);
const { dispatch, subscribe, getState } = createStoreWithMiddleware(
  counterReducer,
  [logger]
);

const unsubscribe = subscribe(() => {
  const { count } = getState();
  countDiv.innerHTML = `Count is ${count}`;
});

increaseButton.addEventListener("click", () => dispatch({ type: "INCREMENT" }));
decreaseButton.addEventListener("click", () => dispatch({ type: "DECREMENT" }));
