import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay,EffectFade, Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import { Grid,Rating} from "@mui/material";
import SliderOneLoading from '../Loading/SliderOneLoading';
SwiperCore.use([Autoplay])

function SliderTwo() {
    const [jewerly,setJewerly] = useState([]);
    useEffect( async () => {
      const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(result => {
          setJewerly(result.data);
          console.log(jewerly)
      })
    },[])
  return (
    <>
    <Swipers
     autoplay= {{
        delay: 2500,
        disableOnInteraction: false
      }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
       {jewerly.map((product,index) => (
           <SwiperSlide key={product.id} >
               <Container container flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
               <Grid item xs={12} sm={6} md={6} lg={6}>
               <Image src={product.image} />
               </Grid>
               <Grid container alignItems={'center'} justifyContent={'center'} item xs={12} sm={6} md={6} lg={6}>
                   <p>edvebrsgrsfedfcdvdvc</p>
               </Grid>
               </Container>
           </SwiperSlide>
       ))}
      </Swipers>
    </>
  )
}

export default SliderTwo;

const Swipers = styled(Swiper)`
margin: 50px 0;
background-color: #cd1c1c;
padding: 40px;
`
const Image = styled.img`
width : 200px;
height : 200px;
padding : 20px;
`
const Container = styled(Grid)``