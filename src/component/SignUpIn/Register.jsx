import { Component } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = { number: "" };
  }
  disableState = true;
  sendSms = (e) => {
    if (this.state.number.length <= 10) return;
    fetch("https://api.bimebama.com/user/send_sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile: this.state.number }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        throw new Error("Enter Your Number Correctly");
      });
      localStorage.setItem('smsSend',this.state.number)
    // e.target.previousElementSibling.children[1].children[0].value = "";
  };
  handleChange = (e) => {
    this.setState({ number: e.target.value });
  };
  componentDidUpdate() {
    this.state.number.length > 9
      ? (this.disableState = false)
      : (this.disableState = true);
  }
  
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Title>Enter Your Phone Number</Title>
            <Box>
              <Input
                onChange={this.handleChange}
                label="Phone Number"
                variant="outlined"
              />
              <Btn
                disabled={this.disableState}
                onClick={this.sendSms}
                variant="contained"
              >
                <Link to="/Verify">Send</Link>
              </Btn>
            </Box>
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Register;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 278px);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 30%;
`;
const Title = styled.p`
  font-size: 1.4em;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
`;
const Input = styled(TextField)`
  width: 250px;
`;

const Btn = styled(Button)`
  padding: 13px 36px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
