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
import Footer from './Footer/Footer';
import Register from './SignUpIn/Register';
import Verify from './SignUpIn/Verify';
import AutorizationWeb from '../Context/Autorization'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <>
    <AutorizationWeb.Provider 
    value={{
      verifyCode : localStorage.getItem('smsSend') ? JSON.parse(localStorage.getItem('smsSend')): null ,
    }}
    >
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
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Verify">
            <Verify />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </AutorizationWeb.Provider>
    </>
  );
}

export default App;
