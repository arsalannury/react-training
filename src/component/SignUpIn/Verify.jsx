import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import AutorizationWeb from "../../Context/Autorization";

const Verify = () => {
  const verifyCode = useContext(AutorizationWeb);
  const [pass, createPass] = useState("");
  const [login, setLogin] = useState(true);
  const config = {
    headers: {
      Authorization: `Token `,
    },
  };
  const postDataLogin = () => {
    axios
      .post(
        "https://api.bimebama.com/user/login/",
        {
          username: verifyCode.autoState,
          password: pass,
        },
        { config }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setPass = (e) => {
    createPass(e.target.value);
  };
  useEffect(() => {
    pass.length >= 4 ? setLogin(false) : setLogin(true);
  });
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Enter Verify Code</Title>
          <Box>
            <Input onChange={setPass} label="Code" variant="outlined" />
            <Btn onClick={postDataLogin} disabled={login} variant="contained">
              Login
            </Btn>
          </Box>
        </Wrapper>
      </Container>
    </>
  );
};

export default Verify;

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
