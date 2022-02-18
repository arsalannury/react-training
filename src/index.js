import ReactDom from "react-dom";
import "./Index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("Project")
);
