import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Electronics from './Electronics/Electronics';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  AOS.init();
  return (
    <>
   <Router>
      <Header />
       <Switch>
         <Route path={'/Electronic'} component={Electronics} />
         <Route path={'/'} component={Home} />
       </Switch>
   </Router>
    </>
  );
}

export default App;
