import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Grid } from "@mui/material";
import CardWomenClothing from './CardWomenClothing'

const WomenClothing = () => {
  const [products, getProducts] = useState([]);
  const [topLineProducts,setTopLineProducts] = useState([]);
  const [bottomLineProducts,setBottomLineProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      try {
        getProducts(response.data);
        setTopLineProducts(response.data.filter((eachProduct) => eachProduct.id <= 17))
        setBottomLineProducts(response.data.filter((eachProduct) => eachProduct.id >= 18))
      } catch (error) {
        getProducts([]);
        throw new Error("your request is faild");
      }
    };
    fetchData();
    console.log(bottomLineProducts)
  }, []);
  return (
    <>
      <Wrapper
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
          <TopColumn container alignItems={'center'} justifyContent={'space-around'}>
            {topLineProducts.map((prod,index) => (
              <CardWomenClothing 
              key={prod.id}
              image={prod.image}
              rate={prod.rating.rate}
              price={prod.price}
              />
            ))}
          </TopColumn>
          <BottomColumn></BottomColumn>
      </Wrapper>
    </>
  );
};
export default WomenClothing;

const Wrapper = styled(Grid)`
  background-image: url("back.png");
  height: 700px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
`;

const TopColumn = styled(Grid)`
width : 100%;
`
const BottomColumn = styled(Grid)`
width : 100%;
`