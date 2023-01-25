const createStore = (reducer) => {
  let state = null;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  dispatch({});
  return { getState, dispatch, subscribe };
};

const themeReducer = (state, action) => {
  if (state === null) {
    return { themeColor: "red" };
  }

  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, themeColor: action.themeColor };
    default:
      return { ...state };
  }
};

export { createStore, themeReducer };
