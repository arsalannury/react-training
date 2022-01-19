import SliderMobile from "../SliderMobile/SliderMobile";
import OfferShow from "../OfferShow/OfferShow";
import AllUsers from "../BestUsers/AllUsers";
import AdsProvider from "../Ads/UseContextAds";

function Home() {
  return (
    <>
      <SliderMobile />
      <OfferShow />
      <AllUsers />
      <AdsProvider />
    </>
  );
}

export default Home;
