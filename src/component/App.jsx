import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Weather from "./Weather";
import WeatherError from "./Errors/WeatherError";
import { Switch, Route , Router} from "react-router-dom";

function App() {
  AOS.init();
  return (
    <>
      <Switch>
        <Route path={"/notFound"} component={WeatherError} />
        <Route path={"/"} component={Weather} />
      </Switch>
    </>
  );
}

export default App;
