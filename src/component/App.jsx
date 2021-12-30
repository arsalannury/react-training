import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
// import WaveUp from './Waves/WaveUp';
// import WaveBottom from './Waves/WaveBottom';
import Header from "./Header/Header";
import SliderBox from "./Slider/Slider";
import RootShoes from "./Introduce/Root";
import Stepperr from "./Stepper/Stepper";
import StepperTitle from "./Stepper/StepperTitle";
import GetProductSale from "./SaleSlider/GetProductSale";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <SliderBox />
      <RootShoes />
      <StepperTitle />
      <Stepperr />
      <GetProductSale />
    </>
  );
}

export default App;
