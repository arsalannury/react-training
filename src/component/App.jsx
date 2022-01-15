import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route,BrowserRouter } from "react-router-dom";

function App() {

  AOS.init();
  return (
    <>
   <BrowserRouter>
   <Router>
      <Header />
   <Switch>
     
   </Switch>
   </Router>
   </BrowserRouter>
    </>
  );
}

export default App;
