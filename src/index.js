import  ReactDOM  from "react-dom";
import Slider from './components/Counter';
import deals from './reducers';
import {moves} from './reducers';
import {createStore} from 'redux';

const store = createStore(deals);
const moveStore = createStore(moves)
const render = () => {
    ReactDOM.render(
        <Slider 
        image={moveStore.getState()}
        increment={()=> {store.dispatch({type : 'INCREMENT'})}}
        decrement={()=> {store.dispatch({type : 'DECREMENT'})}}
        secrement={()=> {store.dispatch({type : 'SECREMENT'})}}
        next={()=> {moveStore.dispatch({type : 'ONE'})}}
        />,
        document.getElementById('Project')
    )
};

render()

store.subscribe(render)
moveStore.subscribe(render)