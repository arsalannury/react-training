import Banner from "../BannerHomePage/Banner";
import BannerTime from "../BannerHomePage/BannerTime";
import Header from "../Header/Header";
import SliderOne from "../HomeSliders/SliderOne";
import Search from '../SearchBar/Search';
import BestProductOne from '../BestProducts/BestProductOne';
import SliderTwo from "../HomeSliders/SliderTwo";

const Home = () => {
    return ( 
        <>
        <Header />
        <Search />
        <Banner />
        <BannerTime />
        <SliderOne />
        <BestProductOne />
        <SliderTwo />
        </>
     );
}
 
export default Home;