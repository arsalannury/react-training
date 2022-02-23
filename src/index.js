import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore();

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("Project")
);
