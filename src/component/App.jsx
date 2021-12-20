import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header/Header';
import Form from './Form/Form';
import GalleryAll from './Gallery/GalleryAll';
import Service from './Services/Service';
import '../../src/Index.css';

function App() {
  AOS.init();
  return (
    <>
    <Header />
    <GalleryAll />
    <Form />
    <Service />
    </>
  );
}

export default App;
