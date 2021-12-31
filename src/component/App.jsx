import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from './Header/Header';
import AnimationType from "./AnimeType/AnimationType";

function App() {
  AOS.init();
  return (
    <>
    <Header />
    <AnimationType />
    </>
  );
}

export default App;
