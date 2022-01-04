import styled from "styled-components";
import { Link } from "react-router-dom";

function NewCollection({ id, title, image}) {
  return (
    <>
      <Box>
        <ImgBox src={image} />
        <TitleBox>
          <Link to="/selectProduct">{title}</Link>
        </TitleBox>
      </Box>
    </>
  );
}

export default NewCollection;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
  &::before {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    transition: all 0.5s ease;
    background: transparent;
  }
  &:hover {
    &::before {
      background: #ccc;
      height: 100%;
    }
  }
`;

const ImgBox = styled.img`
  width: 20%;
  z-index: 1;
`;

const TitleBox = styled.p`
  font-weight: bold;
  color: #0077b6;
  z-index: 1;
 a{
    text-decoration: none;
 }
`;
