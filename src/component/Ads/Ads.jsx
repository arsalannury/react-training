import { Component } from "react";
import styled from "styled-components";
import { useAdsContext } from "../../Context/AdsContext";
import {Link} from 'react-router-dom';

class Ads extends Component {
  static contextType = useAdsContext;
  state = {};
  render() {
    const { id, price, title, image } = this.props;
    return (
      <>
        <Container>
         <Link to={'/Electronic'}> <Image src={image} alt="" /></Link>
          <Box>
            <Title>{title}</Title>
            <Price>$ {price}</Price>
          </Box>
        </Container>
      </>
    );
  }
}

export default Ads;

const Container = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
`;
const Image = styled.img`
  width: 100px;
`;
const Title = styled.p`
  text-align: justify;
`;
const Price = styled.p`
  text-align: justify;
  padding:10px;
`;
const Box = styled.div`
  padding: 20px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
