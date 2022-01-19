import styled from "styled-components";
import {Button} from '@mui/material';

function Electronic({ des, image }) {
  return (
    <>
      <Container>
        <Image src={image} />
        <ButtonsGroup>
          <Update>Update</Update>
          <Delete>Delete</Delete>
        </ButtonsGroup>
        <Description>{des}</Description>
      </Container>
    </>
  );
}

export default Electronic;

const Container = styled.div`
  width: 500px;
  direction: ltr;
  margin: 0 auto 0 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
width : 100%;
`;

const ButtonsGroup = styled.div`
width : 100%;
padding : 10px;
`;

const Update = styled(Button)``;

const Delete = styled(Button)``;

const Description = styled.p`
padding : 10px;
text-align : justify;
`;
