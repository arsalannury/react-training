import SelectContext from '../../Context/SelectContext';
import {useContext} from 'react';
import SelectProduct from "./SelectProduct";
import styled from "styled-components";
import { useState, useEffect } from "react";

function GetData() {
  const GetDataContext = useContext(SelectContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://fakestoreapi.com/products")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  const handleDelete = (id) => {
    products.filter(item => item.id !== id)
  }
  return (
    <>
      <Box>
        {products.map((item, index) => (
          <SelectProduct
            key={index}
            id={item.id}
            title={item.category}
            price={item.price}
            image={item.image}
            deleted={handleDelete}
          />
        ))}
      </Box>
    </>
  );
}

export default GetData;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 60px;
`;
