import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

function BestUsers({ id, avatar, email, fName, lName }) {
  return (
    <>
      <Card id={id}>
        <Image src={avatar} alt="user_image" />
        <Box>
          <Fname>{fName}</Fname>
          <Lname>{lName}</Lname>
        </Box>
        <Email>{email}</Email>
      </Card>
    </>
  );
}

export default BestUsers;

const Card = styled.div`
  min-width: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const Image = styled.img`
  width: 200px;
  border-radius: 50%;
`;
const Fname = styled.p`
  text-align: center;
`;
const Email = styled.p`
  text-align: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 20px;
`;
const Lname = styled(Fname)``;
