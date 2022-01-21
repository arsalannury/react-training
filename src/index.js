import ReactDOM from "react-dom";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import WeatherProvider from "./Context/WeatherContext";

ReactDOM.render(
  <BrowserRouter>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </BrowserRouter>,
  document.getElementById("Project")
);
