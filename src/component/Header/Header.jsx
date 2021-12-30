import { Component } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';


class Header extends Component {
    state = {
        open : false
    }
    handleClose = (event) => {
        if(event.target.tagName === 'INPUT') return;
        this.setState({open : false});
      };
      handleToggle = () => {
        this.setState({open : true});
      };
   
  render() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: "0",
            padding: '5px 10px 0 10px',
            backgroundColor: '#fff',
            zIndex: '100',
            boxShadow: '0 0 15px #ddd',
          }}
        >
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <LogoImg src="addidaslogo.png" alt="site_logo" />
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column'
            }}
          >
            <NavbarList>
              <LiNav>Home</LiNav>
              <LiNav>Products</LiNav>
              <LiNav>Become a Seller</LiNav>
            </NavbarList>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SpanSearch onClick={this.handleToggle}>
              <SearchIcon sx={{fontSize : '18px'}} />
              <Typography>Search</Typography>
            </SpanSearch>
          </Box>
        </Box>


        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={this.state.open}
        onClick={this.handleClose}
      >
          
         <Input type="text" label="Search" placeholder='Search ...' />
      </Backdrop>

      </>
    );
  }
}

export default Header;

const LogoImg = styled.img`
  width: 50px;
`;
const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0 !important;
  padding-left: 7px !important;
`;
const LiNav = styled.li`
  list-style-type: none;
  margin: 0 6px 0 6px;
  cursor: pointer;
  transition: all .5s ease;
  &:hover{
      color : #0e9594;
  }
`;
const SpanSearch = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer
`;

const Input = styled.input`
    width: 20%;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px;
`