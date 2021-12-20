import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header/Header';
import Form from './Form/Form';
import GalleryAll from './Gallery/GalleryAll';
import Services from './Services/Services';
import '../../src/Index.css';

function App() {
  AOS.init();
  return (
    <>
    <Header />
    <GalleryAll />
    <Form />
    <Services />
    </>
  );
}

export default App;
