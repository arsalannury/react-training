import styled from "styled-components";
import { Grid, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";



const User = ({
  id,
  fName,
  lName,
  avatar,
  email,
  data,
  getData,
  item,
  deleteHandler,
}) => {

  const updated = async () => {
    const datas = {
      first_name: "wait please",
      last_name: "wait please",
      email: "react@gmail.com",
      id: id,
    };
    const response = await axios.put(
      `https://reqres.in/api/users/${id}`,
      datas
    );
    const newState = [...data];
    const index = newState.indexOf(item);
    const result = (newState[index] = datas);
    getData(newState);
  };
  const deleted = async () => {
    deleteHandler(id);
  };
  return (
    <>
      <CartMain container>
        <Link to={`/user/${id}`}>
          <CartImage src={avatar} alt='user_image' />
        </Link>
        <CartEmail>{email}</CartEmail>
        <ButtonGroup>
          <Update onClick={updated}>Update User</Update>
          <Deleted onClick={deleted}>Delete User</Deleted>
        </ButtonGroup>
        <CartPersonal>
          <FName>{fName}</FName>
          <LName>{lName}</LName>
        </CartPersonal>
      </CartMain>
    </>
  );
};

export default User;

const CartMain = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column !important;
  box-shadow: 0 0px 10px #ddd;
  border-radius: 5px px;
`;
const CartImage = styled.img`
  border-radius: 50%;
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

const Update = styled(Button)`
  font-size: 0.8em !important;
`;
const Deleted = styled(Update)``;
