import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import SaleSlider from "./SaleSlider";
import SaleContext from "../../context/SaleContext";

class GetProductSale extends Component {
  static contextType = SaleContext;
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoPlay: true,
      autoplaySpeed: 2000,
    };
    return (
      <>
        <SliderMain {...settings}>
          {this.context.States.map((prod, index) => (
            <SaleSlider
              key={index}
              image={prod.image}
              text={prod.text}
              name={prod.name}
              price={prod.price}
              salePrice={prod.salePrice}
              id={prod.id}
              timer={prod.timer}
            />
          ))}
        </SliderMain>
      </>
    );
  }
}

export default GetProductSale;

const SliderMain = styled(Slider)`
  background: linear-gradient(
    to right,
    rgb(55, 65, 81),
    rgb(17, 24, 39),
    rgb(0, 0, 0)
  );
  padding: 20px;
  width: 96%;
  margin: 50px auto;
  border-radius: 10px;
  button {
    &::before {
      color: #000;
    }
  }
`;
