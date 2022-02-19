import ReactDom from 'react-dom';
import {createStore} from 'redux';
import Home from './components/Home';
import reducer from './components/reducers/reducer';

const store = createStore(reducer)

const render = () => {
    ReactDom.render(
        <Home
        back={store.getState()}
        one={() => store.dispatch({type : 'ONE'})}
        two={() => store.dispatch({type : 'TWO'})}
        three={() => store.dispatch({type : 'THREE'})}
        four={() => store.dispatch({type : 'FOUR'})}
        five={() => store.dispatch({type : 'FIVE'})}
        />,
        document.getElementById('Project')
    )
}

render()

store.subscribe(render)