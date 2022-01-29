import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Grid} from '@mui/material';

const EachUser = (props) => {
  const [user, getUser] = useState({});
  useEffect(() => {
    const deal = async () => {
      const response = await axios.get(
        `https://reqres.in/api/users/${props.match.params.id}`
      );
      getUser(response.data.data);
    };
    deal();
  }, []);

  return (
    <>
      <CartMain container>
        <CartImage src={user.avatar} />
        <CartEmail>{user.email}</CartEmail>
        <CartPersonal>
          <FName>{user.first_name}</FName>
          <LName>{user.last_name}</LName>
        </CartPersonal>
      </CartMain>
    </>
  );
};

export default EachUser;

const CartMain = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column !important;
  box-shadow:inset 0 0px 10px #ddd;
  border-radius: 5px px;
  padding: 10px;
  height: 100%;
`;
const CartImage = styled.img`
  border-radius: 50%;
  width:200px;
`;
const CartEmail = styled.p``;
const CartPersonal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const FName = styled.p``;
const LName = styled.p``;

