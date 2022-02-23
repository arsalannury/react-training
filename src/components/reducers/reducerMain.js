// const initialState

const reducerMain = (state = 'what do you want?',{type}) => {
 switch(type){
     case 'ENGLISH' :
         return state = 'Hello';
         break;
    case 'ARABIC' :
        return state = 'اهلا و سهلا';
        break;
    case 'IRANIAN' :
        return state = 'درود'
        default : return state;
 }
}
export default reducerMain;
