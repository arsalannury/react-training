const deals = (state = "logo192.png", action) => {
  switch (action.type) {
    case "INCREMENT":
      return "zood.png";
      break;
    case "DECREMENT":
      return "Tech.png";
      break;
    case "SECREMENT":
      return "Sun.png";
      break;
    default:
      return state;
  }
};
export default deals;

export const moves = (state = "logo192.png", action) => {
  switch (action.type) {
    case 'ONE':
      return "zood.png";
      break;
    // case 2:
    //   return "Tech.png";
    //   break;
    // case 3:
    //   return "Sun.png";
    //   break;
    default:
      return state;
  }
};

