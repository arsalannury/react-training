import { useState } from "react";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [products, setProducts] = useState([
    {
      image: "iphone13.png",
      name: "Iphone 13 ProMax",
      price: "1200 $",
      sellprice: "1050 $",
      id: "1",
    },
    {
      image: "a12.jpg",
      name: "Samsung A12",
      price: "340 $",
      sellprice: "300 $",
      id: "2",
    },
    {
      image: "a52.jpg",
      name: "Samsung A52s",
      price: "560 $",
      sellprice: "490 $",
      id: "3",
    },
    {
      image: "niva8i.jpg",
      name: "Huawei Nova 8i",
      price: "540 $",
      sellprice: "500 $",
      id: "4",
    },
    {
      image: "nova8.jpg",
      name: "Huawei Nova8",
      price: "570 $",
      sellprice: "500 $",
      id: "5",
    },
    {
      image: "pocox3.jpg",
      name: "Xiaomi Poco X3 Pro",
      price: "760 $",
      sellprice: "710 $",
      id: "6",
    },
  ]);
  return (
    <>
      <Slicks autoplay autoplaySpeed={7000} {...settings}>
        {products.map((prod, index) => (
          <Product
            key={index}
            name={prod.name}
            image={prod.image}
            price={prod.price}
            sell={prod.sellprice}
            timer={prod.timer}
          />
        ))}
      </Slicks>
    </>
  );
};

export default Products;

const Slicks = styled(Slider)`
width : 90%;
margin: 60px;
button {
    background : #fff;
    &::before{
     color : #000;
    }
}
`