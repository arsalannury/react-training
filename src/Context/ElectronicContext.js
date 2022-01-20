import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
const ElectronicContext = createContext();

export function useElectronicContext() {
  return useContext(ElectronicContext);
}

function ElectronicProvider({ children }) {
  const [product, getProduct] = useState([]);
  const [loading,isLoading] = useState(true);
  useEffect(async () => {
    const getElectronic = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    getProduct(getElectronic.data);
    isLoading(false)
  }, []);

  const handleUpdate = async (idCard,card) => {
    const update = {
      description: "this product is buil on july 13 2020",
      title: "the best product in SunLand",
    };
    const response = await axios.put(
      `https://fakestoreapi.com/products/${idCard}`,
      update
    );
    console.log(response);

    const newUpdate = [...product]
    const index = newUpdate.indexOf(card)
    newUpdate[index] = {...update}
    getProduct(newUpdate)
  };


  const handleDelete = async (idCard) => {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${idCard}`
    );
    console.log(response);
    const newDelete = product.filter(card => card.id !== idCard)
    getProduct(newDelete)
  };


  const handleCreate = async () => {
    const create = {
      image:
        "https://lh3.googleusercontent.com/a-/AOh14Gg6vygiwMvrId6d_nB2n_dpVrOdgaVjAp8IN-m1=s288-p-rw-no",
      title: "he is arsalan noori",
      description: "Founder of SunLand",
    };
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      create
    );
    console.log(response);
    getProduct([...product,create])
  };


  return (
    <>
      <ElectronicContext.Provider
        value={{
          product,
          getProduct,
          handleCreate,
          handleUpdate,
          handleDelete,
          loading,
        }}
      >
        {children}
      </ElectronicContext.Provider>
    </>
  );
}
export default ElectronicProvider;
