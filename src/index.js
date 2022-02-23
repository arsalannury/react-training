import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducerMain from "./components/reducers/reducerMain";

const store = createStore(reducerMain);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("Project")
);
