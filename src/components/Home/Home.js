import Banner from "../BannerHomePage/Banner";
import BannerTime from "../BannerHomePage/BannerTime";
import Header from "../Header/Header";
import Search from '../SearchBar/Search';

const Home = () => {
    return ( 
        <>
        <Header />
        <Search />
        <Banner />
        <BannerTime />
        </>
     );
}
 
export default Home;