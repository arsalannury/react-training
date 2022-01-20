import AOS from "aos";
import "aos/dist/aos.css";
import "../../src/Index.css";
import Weather from "./Weather";


function App() {

  AOS.init();
  return (
    <>
   <Weather />
    </>
  );
}

export default App;
