import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Jeweley({ image, title, rate, price, id }) {
  return (
    <>
      <Box>
        <GridContainer container>
          <BadgeStyle badgeContent={99} color="success">
            <ShoppingCartOutlinedIcon />
          </BadgeStyle>
          <Grid>
            <Image src={image} />
          </Grid>

          <Title>{title}</Title>

          <Grid item>
            <Inf>
              <Price>$ {price}</Price>
              <Rate>{rate}</Rate>
            </Inf>
          </Grid>
        </GridContainer>
      </Box>
    </>
  );
}

export default Jeweley;

const Box = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 300px;
`;
const GridContainer = styled(Grid)`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  flex-direction: column !important;
  background: #fff;
  border-radius: 5px;
  position: relative;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 0 5px #666;
    transform: translateY(-10px);
  }
`;
const Inf = styled.div`
  display: flex;
  align-items: center;
  jsutify-content: space-between;
  flex-direction: column;
  padding: 10px;
`;
const Image = styled.img`
  width: 65px;
`;
const Price = styled.p`
  padding: 5px;
`;
const Title = styled.p`
  padding: 5px;
  font-size: 0.9em;
  color: #444;
  text-align: center;
`;
const Rate = styled.p`
  padding: 5px;
  color: #ffb703;
`;

const BadgeStyle = styled(Badge)`
  position: absolute !important;
  top: 15px;
  left: 10px;
`;
