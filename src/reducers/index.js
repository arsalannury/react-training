export default (state = '#fff',action) => {
    switch(action.type){
        case "ONBLUE" :
            return state = 'blue';
            break;
        case "ONBLACK" :
            return state = 'black';
        default : return state;
    }
}