import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../src/Index.css';
// import Products from './Product/Products';
import Root from './Product/Root';
import WaveUp from './Waves/WaveUp';
import WaveBottom from './Waves/WaveBottom';


function App() {
  AOS.init();
  return (
    <>
     <WaveUp />
     {/* <Products /> */}
     <Root />
     <WaveBottom />
    </>
  );
}

export default App;
