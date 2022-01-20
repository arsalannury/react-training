import styled from "styled-components";
import { Button } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Backdrop from '@mui/material/Backdrop';
import {useState} from 'react';
import {useElectronicContext} from "../../Context/ElectronicContext";


function Electronic({ des, image ,title ,price ,id ,card}) {
  const use = useElectronicContext();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
 
  const update = () => {
    use.handleUpdate(id,card)
  }
  const deleted = () => {
    use.handleDelete(id)
  }
  return (
    <>
      <Main>
        <Dots onClick={handleToggle}/>
        <Container>
          <Image src={image} />
          <ButtonsGroup>
            <Update onClick={update}>Update</Update>
            <Delete onClick={deleted}>Delete</Delete>
          </ButtonsGroup>
          <Description>{title}</Description>
        </Container>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Detail>
         <DetailBox>
         <DetailImage src={image} alt='product' />
         <DetailPrice>$ {price}</DetailPrice>
         </DetailBox>
          <DetailParag>{des}</DetailParag>
        </Detail>
      </Backdrop>
      </Main>
    </>
  );
}

export default Electronic;

const Container = styled.div`
  width: 500px;
  direction: ltr;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 30%;
`;

const ButtonsGroup = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Update = styled(Button)``;

const Delete = styled(Button)``;

const Description = styled.p`
  padding: 10px;
  text-align: justify;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position : relative;
  border: 1px solid #eee;
`;

const Dots = styled(MoreHorizIcon)`
position : absolute;
top : 10px;
left : 40px;
cursor : pointer;

`

const Detail = styled.div`
diplay : flex;
align-items : center;
justify-content : space-around;
flex-direction : column;
background : #fff;
width : 90%;
padding : 40px;
border-radius : 10px;
`
const DetailImage = styled.img`
width : 20%;
padding-bottom : 30px;

`
const DetailParag = styled.p`
line-height : 40px;
text-align : justify;
font-size : .9em;
color : #000;
`

const DetailBox = styled.div`
 display : flex;
 align-items : center;
 justify-content : space-around;
`
const DetailPrice = styled.p`
 color : #000;
`