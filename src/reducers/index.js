const initialState = {
  counter: 0,
  result : 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1000,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      result: state.result - action.value,
    };
  } else {
    return state;
  }
};

export default reducer;