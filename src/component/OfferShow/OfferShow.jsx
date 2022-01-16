import styled from "styled-components";
import Grid from "@mui/material/Grid";

function OfferShow() {
  return (
    <>
      <Box container>
        <Grid item xs={12} sm={12} md={6}>
            <Container>
          <BoxOne>
            <IconOne src="bitcoin.svg" alt="alt" />
            <TextOne>امکان پرداخت با ارز های دیجیتال</TextOne>
          </BoxOne>
          <BoxTwo>
            <IconTwo src="delivery-50.svg" alt="alt" />
            <TextTwo>رضایت کامل شما زمان تحویل</TextTwo>
          </BoxTwo>
          <BoxThree>
            <IconThree src="delivery5.svg" alt="alt" />
            <TextThree>تحویل کمتر از سه ساعت در تهران</TextThree>
          </BoxThree>
          </Container>
        </Grid>
        <Grid item xs={12} sm={11} md={6}>
          <Image src="tehran.jpg" />
        </Grid>
      </Box>
    </>
  );
}

export default OfferShow;


const Box = styled(Grid)`
  margin-top: 60px;
`;
const Image = styled.img`
  width: 100%;
`;
const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction : column;
height : 80%;
`
const BoxOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BoxTwo = styled(BoxOne)``;
const BoxThree = styled(BoxOne)``;

const IconOne = styled.img`
padding : 0 10px 0 20px;
width : 70px;
`;
const IconTwo = styled(IconOne)``;
const IconThree = styled(IconOne)``;

const TextOne = styled.p`
font-size : .9em;
color : #777;
`;
const TextTwo = styled(TextOne)``;
const TextThree = styled(TextOne)``;
