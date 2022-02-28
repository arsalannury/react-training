const initialState = {
  number: 0,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case "ONE":
      return {
        number: (state.number = 10),
      };
      break;
    case "TWO":
      return {
        number: (state.number = 20),
      };
      break;
    case "THREE":
      return {
        number: (state.number = 30),
      };
      break;
    case "FOUR":
      return {
        number: (state.number = 40),
      };
      break;
    case "FIVE":
      return {
        number: (state.number = 50),
      };
      break;
      default : return state;
  }
};
export default reducer;