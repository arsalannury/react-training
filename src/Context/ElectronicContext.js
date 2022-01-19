import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
const ElectronicContext = createContext();

export function useElectronicContext() {
  return useContext(ElectronicContext);
}

function ElectronicProvider({ children }) {
  const [product, getProduct] = useState([]);
  useEffect(async () => {
    const getElectronic = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    getProduct(getElectronic.data);
  }, []);
  return (
    <>
      <ElectronicContext.Provider
        value={{
          product,
          getProduct,
        }}
      >
        {children}
      </ElectronicContext.Provider>
    </>
  );
}
export default ElectronicProvider;
