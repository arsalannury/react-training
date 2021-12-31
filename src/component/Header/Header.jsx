import { Component } from "react";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

class Header extends Component {
  state = {
    open: false,
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleToggle = () => {
    this.setState({ open: true });
  };
  render() {
    return (
      <>
        <Container>
          <Head>
            <Logo src="Tech.png" />

            <NavMenu>
              <LiNav>Product List</LiNav>
              <LiNav>Hiring</LiNav>
              <LiNav>About Us</LiNav>
              <LiNav>VR / AR</LiNav>
            </NavMenu>

            <Wrapper>
              <SearchOutlinedIcon sx={{cursor: 'pointer'}} />
              <SignIn>Sign In</SignIn>
              <SignUp>Sign Up</SignUp>
            </Wrapper>
          </Head>
        </Container>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={this.state.open}
          onClick={this.handleClose}
        >
          <SearchInput type="text" />
        </Backdrop>
      </>
    );
  }
}

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 140px;
  box-shadow: 0 0 25px #eee;
  position : sticky;
  top : 0;
  background : #fff;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 !important;
  margin: 0 0 0 25px;
`;
const Logo = styled.img`
  width: 20%;
  height: 220px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 350px;
`;
const SearchInput = styled.input`
  //
`;
const SignIn = styled.button`
  border: 1px solid blue;
  padding: 4px 17px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #0077b6;
    color: #fff;
  }
`;
const SignUp = styled.button`
  border: 1px solid blue;
  padding: 4px 17px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #0077b6;
    color: #fff;
  }
`;
const LiNav = styled.li`
  list-style-type: none;
  padding: 12px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: #0077b6;
  }
`;
