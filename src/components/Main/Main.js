import { connect } from "react-redux";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useState } from "react";
import {Toaster,toast} from 'react-hot-toast';

const Main = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = (e) => {
    if (e.target.tagName === "P") return;
    setOpen(false);
  };
  const handleToggle = () => {
    if (props.content === "") {
      toast.error('There is no proverb for translate')
      return;
    }
    setOpen(!open);
  };
  return (
    <>
      <Contaienr>
        <Content>
          <P>{props.content}</P>
          <From>{props.from}</From>
        </Content>
        <ButtonGroup>
          <PrevBtn onClick={props.prevState} disabled={props.disabledPrev}>
            <ArrowForwardIosOutlinedIcon />
          </PrevBtn>
          <Button onClick={handleToggle}>Translate</Button>
          <NextBtn onClick={props.nextState} disabled={props.disabledNext}>
            <ArrowBackIosOutlinedIcon />
          </NextBtn>
        </ButtonGroup>
      </Contaienr>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Div>
          <Translate>{props.translate}</Translate>
        </Div>
      </Backdrop>
      <Toaster />
    </>
  );
};

let ACTION = -1;

const currentStates = (state) => {
  return {
    content: state.content,
    from: state.from,
    disabledNext: state.disabledNext,
    disabledPrev: state.disabledPrev,
    translate: state.translate,
  };
};
const dispatchState = (dispatch) => {
  return {
    nextState: () => dispatch({ type: (ACTION += 1) }),
    prevState: () => dispatch({ type: (ACTION -= 1) }),
  };
};

export default connect(currentStates, dispatchState)(Main);

const Contaienr = styled.div`
  background-color: #212529;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: cflex-start;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 30px;
  width: 500px;
  height: 300px;
  backdrop-filter: blur(25px) saturate(158%);
  -webkit-backdrop-filter: blur(25px) saturate(158%);
  background-color: rgba(255, 255, 255, 0.63);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;

const Button = styled.button`
  border: none;
  outlined: none;
  background: #fff;
  border-radius: 5px;
  padding: 8px 13px;
  margin-top: 80px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: #0077b6;
  }
`;
const P = styled.p`
  color: #3c096c;
  font-size: 1.3em;
  font-style: italic;
  padding: 0 16px;
`;
const From = styled.p`
  font-size: 2em;
  color: #212529;
  font-style: italic;
`;
const NextBtn = styled(Button)``;
const PrevBtn = styled(Button)``;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Div = styled.div`
  width: 500px;
  height: 280px;
  background: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;
const Translate = styled.p`
  color: #3c096c;
  text-align: center;
  padding: 5px;
`;
