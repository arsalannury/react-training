import { useElectronicContext } from "../../Context/ElectronicContext";
import Electronic from "./Electronic";
import styled from "styled-components";
import {Button} from '@mui/material';
import ElectronicLoading from "../Loadings/ElectronicLoading";

function Electronics() {
  const context = useElectronicContext();
  const create = () => {
    context.handleCreate();
  };
  return (
    <>
     {context.loading ? (
         <ElectronicLoading />
     ) : (
        <Grid>
        <Button onClick={create}>Create Product</Button>
      {context.product.map((item, index) => (
        <Electronic
          key={index}
          id={item.id}
          des={item.description}
          image={item.image}
          title={item.title}
          price={item.price}
          card={item}
        />
      ))}
    </Grid>
     )}
    </>
  );
}

export default Electronics;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  margin: 50px;
`;
