import SliderMobile from "../SliderMobile/SliderMobile";
import OfferShow from "../OfferShow/OfferShow";
import AllUsers from "../BestUsers/AllUsers";
import AdsProvider from "../Ads/UseContextAds";
// import AllAds from '../Ads/AllAds';

function Home() {
  return (
    <>
      <SliderMobile />
      <OfferShow />
      <AllUsers />
      {/* <AllAds /> */}
      <AdsProvider />
    </>
  );
}

export default Home;
