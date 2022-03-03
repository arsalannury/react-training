import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducer from './components/reducers/reducer';
import { Provider } from 'react-redux';
import "./Index.css";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('Project')
)