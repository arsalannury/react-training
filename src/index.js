import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import { createStore } from "redux";
import color from './reducers';

const store = createStore(color)

const render = () => {
  ReactDOM.render(
    <Counter 
    colorBack={store.getState()}
    onBlue={()=> store.dispatch({type : "ONBLUE"})}
    onBlack={()=> store.dispatch({type : "ONBLACK"})}
    />,
    document.getElementById('Project')
  )
}

render()

store.subscribe(render);