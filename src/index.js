import ReactDom from 'react-dom';
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('Project')
);
