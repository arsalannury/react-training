import { connect } from "react-redux";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

const Home = (props) => {
  const copyColor = async (text) => {
    try {
      window.navigator.clipboard.writeText(text);
      toast.success("Success Copy");
    } catch (error) {
      toast.error("Feild Copy");
    }
  };
  return (
    <>
      <Container>
        <BoxColor
          onClick={() => {
            copyColor(props.current);
          }}
          style={{ background: props.current }}
        >
          {props.current}
        </BoxColor>
        <EachColorBoxes>
          <Color1 onClick={props.yellow}></Color1>
          <Color2 onClick={props.orange}></Color2>
          <Color3 onClick={props.red}></Color3>
          <Color4 onClick={props.purpule}></Color4>
          <Color5 onClick={props.blue}></Color5>
        </EachColorBoxes>
      </Container>
      <Toaster />
    </>
  );
};

const currentState = (state) => {
  return {
    current: state,
  };
};
const usingStates = (dispatch) => {
  return {
    yellow: () => dispatch({ type: "YELLOW" }),
    orange: () => dispatch({ type: "ORANGE" }),
    red: () => dispatch({ type: "RED" }),
    purpule: () => dispatch({ type: "PURPULE" }),
    blue: () => dispatch({ type: "BLUE" }),
  };
};
// const

export default connect(currentState, usingStates)(Home);

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 15px;
`;
const BoxColor = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 0 5px #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const EachColorBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;
const Color1 = styled.span`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: #ffbe0b;
  margin: 0 5px 0 5px;
  cursor: pointer;
`;
const Color2 = styled(Color1)`
  background: #fb5607;
`;
const Color3 = styled(Color1)`
  background: #ff006e;
`;
const Color4 = styled(Color1)`
  background: #8338ec;
`;
const Color5 = styled(Color1)`
  background: #3a86ff;
`;
