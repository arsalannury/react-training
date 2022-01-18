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
   <Router>
      <Header />
       <Switch>
         <Route path={'/'} component={Home} />
       </Switch>
   </Router>
    </>
  );
}

export default App;
