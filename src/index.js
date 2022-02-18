import ReactDom from 'react-dom';
import './Index.css';
import Redux from './components/Redux';
import {createStore} from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer)

store.dispatch({type : 'INCREMENT'})
store.dispatch({type : 'DECREMENT', value : 100})

store.subscribe(
    console.log(store.getState())
)

ReactDom.render(
    <Redux />,
    document.getElementById('Project')
);

// console.log(store.getState())

