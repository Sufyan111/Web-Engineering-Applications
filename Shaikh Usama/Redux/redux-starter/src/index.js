import store from "./store";
// import * as actions from "./action";
import { bugAdded, bugResolved } from "./actionType";

store.subscribe(() => {
  console.log("state changed");
});

store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(0));
store.dispatch(bugAdded("bug3 "));
// console.log(store.getMyState());
