import styled from "styled-components";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <>
      <TitleH5>{days}</TitleH5>:<TitleH5>{hours}</TitleH5>:<TitleH5>{minutes}</TitleH5>:
      <TitleH5>{seconds}</TitleH5>
    </>
  );
}

function Product({ image, name, price, sell }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600000);
  return (
    <>
      <Card>
        <ImgCard src={image} />
        <CardInf>{name}</CardInf>
        <CardPrice>
          <Price>{price}</Price>
          <SellPrice>{sell}</SellPrice>
        </CardPrice>
        <CardTimer>
          <MyTimer expiryTimestamp={time} />
        </CardTimer>
      </Card>
    </>
  );
}

export default Product;

const Card = styled.div`
  width: 300px;
  height : 483px;
  box-shadow: 0 0 2px #999;
  padding: 8px;
`;
const ImgCard = styled.img`
  width: 100%;
`;
const CardInf = styled.p`
  margin: 20px 0;
  font-size: 1.1em;
  text-align: center;
`;

const CardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Price = styled.del`
  color: #cd1818;
`;
const SellPrice = styled.span`
  color: #06ff00;
`;
const CardTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

const TitleH5 = styled.h5`
opacity : 80%;
`