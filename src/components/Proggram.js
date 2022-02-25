import { Component } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import actions from "./store/actions";

class Proggram extends Component {
  render() {
    return (
      <>
        <Main
          container
          alignItems={"center"}
          justifyContent={"center"}
          style={{ background: this.props.current }}
        >
          <Buttons
            container
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Btn1 style={{border: this.props.mengiueBorder}} onClick={this.props.meringue}></Btn1>
            <Btn2 style={{border: this.props.yellowBorder}} onClick={this.props.yellow}></Btn2>
            <Btn3 style={{border: this.props.orangeBorder}} onClick={this.props.orange}></Btn3>
            <Btn4 style={{border: this.props.redBorder}} onClick={this.props.red}></Btn4>
            <Btn5 style={{border: this.props.blueBorder}} onClick={this.props.blue}></Btn5>
          </Buttons>
        </Main>
      </>
    );
  }
}

const currentState = (state) => {
  return {
    current: state.color,
    mengiueBorder: state.borderMengiue,
    yellowBorder: state.borderYellow,
    orangeBorder: state.borderOrange,
    redBorder: state.borderRed,
    blueBorder: state.borderBlue
  };
};
const dispatchState = (dispatch) => {
  return {
    meringue: () => dispatch({ type: actions.MERINGUE }),
    yellow: () => dispatch({ type: actions.YELLOWRED }),
    orange: () => dispatch({ type: actions.ORANGE }),
    red: () => dispatch({ type: actions.RED }),
    blue: () => dispatch({ type: actions.BLUE }),
  };
};

export default connect(currentState, dispatchState)(Proggram);

const Main = styled(Grid)`
  height: 97vh;
  transition: all 750ms ease;
`;
const Buttons = styled(Grid)`
  height: 200px;
  width: 200px;
`;
const Btn1 = styled.span`
  padding: 20px;
  cursor: pointer;
  background: #eae2b7;
  transition: all 750ms ease;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
  }
`;
const Btn2 = styled(Btn1)`
  background: #fcbf49;
`;
const Btn3 = styled(Btn1)`
  background: #f77f00;
`;
const Btn4 = styled(Btn1)`
  background: #d62828;
`;
const Btn5 = styled(Btn1)`
  background: #003049;
`;
