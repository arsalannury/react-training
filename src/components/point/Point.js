import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class Point extends Component {

  render() {
    return (
      <>
        <Div>
          <h1>
            {this.props.number} + 10000000 = {this.props.number + 10000000}
          </h1>
          <Condition onClick={this.props.one}>10</Condition>
          <Condition onClick={this.props.two}>20</Condition>
          <Condition onClick={this.props.three}>30</Condition>
          <Condition onClick={this.props.four}>40</Condition>
          <Condition onClick={this.props.five}>50</Condition>
        </Div>
      </>
    );
  }
}

const showState = (state) => {
  return {
    number: state.number,
  };
};
const dispatchState = (dispatch) => {
  return {
    one: () => dispatch({ type: "ONE" }),
    two: () => dispatch({ type: "TWO" }),
    three: () => dispatch({ type: "THREE" }),
    four: () => dispatch({ type: "FOUR" }),
    five: () => dispatch({ type: "FIVE" }),
  };
};

export default connect(showState,dispatchState)(Point);

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const Condition = styled.p`
  cursor: pointer;
  align-self: flex-start;
`;
