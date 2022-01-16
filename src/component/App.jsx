import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route,BrowserRouter } from "react-router-dom";

function App() {

  AOS.init();
  return (
    <>
   <BrowserRouter>
   <Router>
      <Header />
       <Switch>
         <Route exact path={'/'}><Home /></Route>
       </Switch>
   </Router>
   </BrowserRouter>
    </>
  );
}

export default App;
