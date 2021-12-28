import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../src/Index.css';
// import WaveUp from './Waves/WaveUp';
// import WaveBottom from './Waves/WaveBottom';
import Header from './Header/Header';
import SliderBox from './Slider/Slider';
import RootShoes from "./Introduce/Root";

function App() {
  AOS.init();
  return (
    <>
    <Header />
    <SliderBox />
    <RootShoes />
    </>
  );
}

export default App;
