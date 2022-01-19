import { Component } from "react";
import styled from "styled-components";
import { useAdsContext } from "../../Context/AdsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Ads from "./Ads";
import ElectronicLoading from "../Loadings/ElectronicLoading";
import {Link} from 'react-router-dom';
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination]);

class AllAds extends Component {
  static contextType = useAdsContext;
  render() {
    return (
      <>
       {this.context.loading ? (
         <ElectronicLoading />
       ) : (
        <Swipers
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
       
        {this.context.electronics.map((item, index) => (
          <SwiperSlide>
            <Ads
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </SwiperSlide>
        ))}
         <Div>
          <TitleSwiper><Link to={'/Electronic'}>محصولات الکترونیک</Link></TitleSwiper>
        </Div>
      </Swipers>
       )}
      </>
    );
  }
}

export default AllAds;

const Swipers = styled(Swiper)`
  padding: 40px;
`;
const TitleSwiper = styled.h5``;
const Div = styled.div`
position : absolute;
top: 0;
a{
    text-decoration : none;
    color: rgb(255, 183, 3);
}
`
