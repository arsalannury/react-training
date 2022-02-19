

const reducer = (state = '#fff', action) => {
  switch(action.type){
      case "ONE" :
          return state = "#fb8500"
          break;
      case "TWO" :
          return state = "#ffb703"
          break;
     case 'THREE' :
         return state = "#023047"
         break
     case "FOUR" :
         return state = "#219ebc"
         break;
     case "FIVE" :
         return state = "#8ecae6"
         break;
    default : return state;
  }
};
export default reducer;

