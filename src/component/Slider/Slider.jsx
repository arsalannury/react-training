import {useState} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderBox = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
      };

    return (
       <>
       <div>
        <Carousel {...settings}>
          <div>
            <ImgSlider src="gray.jpg" alt="addidas" />
          </div>
          <div>
            <ImgSlider src="white.jpg" alt="addidas" />
          </div>
          <div>
            <ImgSlider src="black.jpg" alt="addidas" />
          </div>
        </Carousel>
        </div>
       </>
    )
}

export default SliderBox;

const ImgSlider = styled.img`
width : 100%;
height : 450px;
border-radius : 6px;
`
const Carousel = styled(Slider)`
width: 50%;
margin: 100px auto 0 auto;
button{
    background : #fff;
    &::before{
        color : #000;
    }
   
}
`