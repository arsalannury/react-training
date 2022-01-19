
import {useElectronicContext} from "../../Context/ElectronicContext";
import Electronic from "./Electronic";

function Electronics() {
    const context = useElectronicContext();
  return(
      <>
      {context.product.map((item,index) => (
          <Electronic 
          key={index}
          id={item.id}
          des={item.description}
          image={item.image}
          />
      ))}
      </>
  )
}

export default Electronics;
