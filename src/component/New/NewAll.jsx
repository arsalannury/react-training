import NewCollection from './NewCollection';
import styled from 'styled-components';
import {useContext} from 'react';
import CollectionContext from "../../Context/CollectionContext";

function NewAll() {
    const collectionContext = useContext(CollectionContext);
    return (
       <>
       <TitleNew>New Collections</TitleNew>
      <Wrapper>
       {collectionContext.AllProduct.map((information,index) => (
           <NewCollection key={index} id={information.id} title={information.title} image={information.image} />
       ))}
       </Wrapper>
       </>
    )
}

export default NewAll

const Wrapper = styled.div`
 border : 1px solid #ccc;
 display : flex;
 align-items : center;
 justify-content : space-evenly;
 margin : 10px 20px 70px 20px;
 height : 350px;
 border-radius : 4px;
`
const TitleNew = styled.p`
text-align : center;
color : #999;
margin : 70px 0 0 0;
font-size : 1.3em;
`