import { useState } from "react";
import { Container } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import { useHeaderStyle } from "./HeaderStyle";
import { TextField } from "@mui/material";

const Header = () => {
  let [display, setDisplay] = useState('none');
  const classes = useHeaderStyle();
  const searchShow = () => {
    setDisplay('flex');
  }
  const searchHide = (event) => {
    if(event.target.tagName === 'INPUT') return;
    setDisplay('none');
  }
  return (
    <>
      <Box
        onClick={searchHide}
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1055",
          display: {display},
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          outline: "0",
          background: "rgba(0,0,0,0.70)",
          transition:'all .5s ease',
        }}
      >
        <TextField className={classes.search_input} variant="outlined" label="Search" />
      </Box>
      <Container className={classes.container_header}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className={classes.box_header} position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon className={classes.navbar_icon_header} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Tooltip title="Search">
                  <SearchIcon onClick={searchShow} className={classes.search_icon_header} />
                </Tooltip>
              </Typography>
              <Typography className={classes.p_title}>React</Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </>
  );
};
export default Header;
