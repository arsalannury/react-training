// const initialState

const reducerMain = (state = "#fff", { type }) => {
  switch (type) {
    case "YELLOW":
      return (state = "#ffbe0b");
      break;
    case "ORANGE":
      return (state = "#fb5607");
      break;
    case "RED":
      return (state = "#ff006e");
      break;
    case "PURPULE":
      return (state = "#8338ec");
      break;
    case "BLUE":
      return (state = "#3a86ff");
      break;
    default:
      return state;
  }
};
export default reducerMain;
