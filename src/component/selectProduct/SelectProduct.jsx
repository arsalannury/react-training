// import { useState, useEffect } from "react";
import styled from "styled-components";

function SelectProduct({ image, title, price }) {
  return (
    <>
      <Box>
        <ImgBox src={image} />
        <TextBox>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </TextBox>
      </Box>
    </>
  );
}

export default SelectProduct;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 500px;
`;
const TextBox = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const ImgBox = styled.img`
  width: 20%;
  margin: 10px;
`;
const Title = styled.p`
  margin: 10px;
`;
const Price = styled.p`
  margin: 10px;
`;
