import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from './Header/Header';

function App() {
  AOS.init();
  return (
    <>
    <Header />
    </>
  );
}

export default App;
