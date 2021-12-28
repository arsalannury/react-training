import Introduce from "./Introduce";
import { Box } from "@mui/material";
import {useContext} from 'react';
import ShoesContext from "../../context/ContextShoes";
import ChoiseProduct from "./ChoiseProduct";

function IntroduceAll() {
  const shoesContext = useContext(ShoesContext);
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(background.png)",
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed ',
          baclgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '100px',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        <ChoiseProduct />
        {shoesContext.State.map((each, index) => (
          <Introduce
            key={index}
            id={each.id}
            name={each.name}
            count={each.count}
            text={each.text}
            image={each.image}
            price={each.price}
            priceSell={each.priceSell}
          />
        ))}
      </Box>
    </>
  );
}

export default IntroduceAll;
