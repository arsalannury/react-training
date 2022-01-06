// import { useState, useEffect } from "react";
import styled from "styled-components";
import {Button,ButtonGroup} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SelectContext from '../../Context/SelectContext';
import {useContext} from 'react';

function SelectProduct({ image, title, price,id,deleted}) {
  const contextUse = useContext(SelectContext);
  const handleIncrement = () =>{
   contextUse.increment(id)
  }
  const handleDecrement = () => {
    contextUse.decrement(id)
  }
  const handleDelete = () =>{
   deleted(id)
  }
  return (
    <>
      <Box>
        <ImgBox src={image} />
        <TextBox>
          <Title>{title}</Title>
          <Price>{price} $</Price>
          {/* <Count>{contextUse.countState}</Count> */}
        </TextBox>
        <Actions>
          <Button onClick={handleIncrement} variant="outlined">+</Button>
          <Button onClick={handleDelete} variant="outlined"><DeleteOutlineOutlinedIcon/></Button>
          <Button onClick={handleDecrement} variant="outlined">-</Button>
        </Actions>
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
 const Actions = styled(ButtonGroup)`
 
 `
 const Count = styled.p`
 
 `