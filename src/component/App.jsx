import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../src/Index.css';
import WaveUp from './Waves/WaveUp';
import WaveBottom from './Waves/WaveBottom';
import Slider from './Slider/Slider';


function App() {
  AOS.init();
  return (
    <>
     <WaveUp />
     <Slider /> 
     <WaveBottom />
    </>
  );
}

export default App;
