import reducer from "./reducer";

const myStore = (reducer) => {
  let state;
  let listeners = [];

  const getMyState = () => {
    return state;
  };

  const mySubscribe = (listener) => {
    listeners.push(listener);
  };
  const myDispatch = (action) => {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  };

  return { getMyState, myDispatch, mySubscribe };
};

export default myStore(reducer);
