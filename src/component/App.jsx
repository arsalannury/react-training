import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Header from './Header/Header';
import AnimationType from "./AnimeType/AnimationType";
import Products from './SaleProductSlider/Products';
// import "swiper/css/bundle";

function App() {
  AOS.init();
  return (
    <>
    <Header />
    <AnimationType />
    <Products />
    </>
  );
}

export default App;
