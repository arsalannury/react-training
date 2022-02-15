import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import { Grid } from "@mui/material";

function SliderOne() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((result) => {
        setProducts(result.data);
        console.log(products);
      });
  }, []);

  return (
    <>
      <SwiperMain
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },

          768: {
            width: 768,
            slidesPerView: 2,
          },
          920: {
            width: 920,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <SlideImage
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Images src={slide.image} />
              <Information
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Count>محصول جدید</Count>
                <Rate>{slide.rating.rate.toString().toPersian()}</Rate>
              </Information>
            </SlideImage>
          </SwiperSlide>
        ))}
      </SwiperMain>
    </>
  );
}

export default SliderOne;

const Images = styled.img`
  width: 100%;
  height: 90%;
`;

const SlideImage = styled(Grid)`
  height: 240px;
`;

const SwiperMain = styled(Swiper)`
  height: 350px;
  margin: 50px 0;
  padding: 40px !important;
  background: #cd1c1c;
`;
const Rate = styled.p`
  color: #cd1c1c;
  font-weight: bold;
`;

const Information = styled(Grid)``;
const Count = styled.span`
  font-size: 0.8em;
  color: #cd1c1c;
`;
