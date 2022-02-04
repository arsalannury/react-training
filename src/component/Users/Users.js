import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import User from "./User";
import {Link} from 'react-router-dom';

const Users = (props) => {
  const [data, getData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(`https://reqres.in/api/users?page=2`);
    getData(response.data.data);
  }, []);

  const deleteHandler = async (id) => {
    const response = await axios.delete(`https://reqres.in/api/users/${id}`);
    const newState = data.filter((items) => items.id !== id);
    getData(newState);
  };

  const createHandler = async () => {
    const datas = {
      first_name: "Arsalan",
      last_name: "Nury",
      email: "arsalan@email.com",
      id: Math.random() * 100000,
      avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GhWDs_Z4wBxv3bjPDr6jruTrx_G_ZeVjFYSYNtN=s288-p-rw-no",
    };
    const response = await axios.post(`https://reqres.in/api/users`, datas);
    getData([...data, datas]);
  };
  return (
    <>
    <Div>
      <Span><Link to={'/login'}>Login</Link></Span>
    </Div>
      <ButtonContainer>
        <Create onClick={createHandler} variant="contained">
          Create User
        </Create>
      </ButtonContainer>
      <Container>
        {data.map((item, index) => (
          <User
            key={index}
            id={item.id}
            fName={item.first_name}
            lName={item.last_name}
            avatar={item.avatar}
            email={item.email}
            data={data}
            getData={getData}
            item={item}
            deleteHandler={deleteHandler}
          />
        ))}
      </Container>
    </>
  );
};

export default Users;

const Container = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  grid-template-rows: repeat(3, 300px);
  padding: 10px;
`;
const Create = styled(Button)`
  width: 30%;
  letter-spacing: 4px !important;
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
width: 100%;
height : 40px;
display: flex;
align-items: center;
justify-content: flex-start;
background : #eee;
`
const Span = styled.span`
cursor : pointer;
padding: 10px;
a{
  text-decoration: none;
  color:#000;
}
`