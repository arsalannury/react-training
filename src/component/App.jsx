import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from "./Header/Header";
import AnimationType from "./AnimeType/AnimationType";
import Products from "./SaleProductSlider/Products";
import RootNew from "./New/RootNew";
import GetData from './selectProduct/GetData';
import ServiceRoot from './OurServices/ServicesRoot';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AnimationType />
            <Products />
            <RootNew />
            <ServiceRoot />
          </Route>
          <Route path="/selectProduct">
            <GetData />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
