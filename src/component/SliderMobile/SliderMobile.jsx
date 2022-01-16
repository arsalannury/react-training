import { Component } from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import axios from "axios";
import Jewelery from "./Jeweley";
import Grid from "@mui/material/Grid";

class SliderMobile extends Component {
  constructor() {
    super();
    this.state = { jewelery: [] };
  }
  async componentDidMount() {
    const result = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    this.setState({ jewelery: result.data });
  }

  render() {
    return (
      <>
        <SwiperBody
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
            <Image src='youngman.png' alt='man' />
          {this.state.jewelery.map((item, index) => (
            <SwiperSlide key={index}>
              <Jewelery
                id={item.id}
                key={index}
                image={item.image}
                title={item.title}
                rate={item.rating.rate}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </SwiperBody>
      </>
    );
  }
}

export default SliderMobile;

const SwiperBody = styled(Swiper)`
 margin-top : 60px;
 background: rgba(255, 183, 3,.6);
 padding : 20px;
 postion : relative;
`
const Image = styled.img`
width : 170px;
position : absolute;
top : 28px;
`