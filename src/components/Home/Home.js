import Banner from "../BannerHomePage/Banner";
import BannerTime from "../BannerHomePage/BannerTime";
import Header from "../Header/Header";
import SliderOne from "../HomeSliders/SliderOne";
import Search from '../SearchBar/Search';

const Home = () => {
    return ( 
        <>
        <Header />
        <Search />
        <Banner />
        <BannerTime />
        <SliderOne />
        </>
     );
}
 
export default Home;