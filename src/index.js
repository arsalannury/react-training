import ReactDOM from "react-dom";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import ElectronicProvider from "./Context/ElectronicContext";

ReactDOM.render(
  <BrowserRouter>
    <ElectronicProvider>
      <App />
    </ElectronicProvider>
  </BrowserRouter>,
  document.getElementById("Project")
);
