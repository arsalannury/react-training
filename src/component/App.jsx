import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import '../../src/Index.css';

function App() {
  AOS.init();
  return (
    <>
    <Header />
    <Gallery />
    </>
  );
}

export default App;
