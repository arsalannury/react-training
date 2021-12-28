import React from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import ShoesContext from "../../context/ContextShoes";
import styled from 'styled-components';

function ChoiseProduct() {
  const shoesContext = useContext(ShoesContext);
  const showChoise = () => {
    let res = 0;
    shoesContext.State.map((each) => {
      res += each.count;
    });
    return res;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "absolute",
          top: '0',
          width: '100%',
          padding: '8px',
        }}
      >
        <SpanCard>You Want :</SpanCard>
        <SpanCardCount>{showChoise()}</SpanCardCount>
        <SpanCard>Shoes</SpanCard>
      </Box>
    </>
  );
}

export default ChoiseProduct;

const SpanCard = styled.span`
font-weight : bold;
`
const SpanCardCount = styled.span`
font-weight : bold;
font-size : 1.3em;
color : #fff;
`