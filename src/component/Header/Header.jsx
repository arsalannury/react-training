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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { toast, Toaster } from "react-hot-toast";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MoodIcon from "@mui/icons-material/Mood";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Header = () => {
  // states
  let [display, setDisplay] = useState("none");
  const [value, setValue] = useState(0);
  const [send, toSend] = useState("true");
  let [navbar, changeNavbar] = useState([
    { width: "0", display: "none" },
  ]);
  
  // makeStyles MaterialUi
  const classes = useHeaderStyle();
  const searchShow = () => {
    setDisplay("flex");
    toast.success("What do you want ?");
  };

  // HIDDEN search backdrop
  const searchHide = (event) => {
    if (event.target.tagName === "INPUT") return;
    setDisplay("none");
    toast.success("Ok see you later");
  };

  // send to me BUTTON handler
  const sendToMe = (event) => {
    if (send === "true") {
      toast.error("write more please");
      return;
    }
    event.target.parentElement.style.display = "none";
    toast.success("Thank you friend");
  };

  // checkvlength of value SEND TO ME input 
  const onInputChange = (event) => {
    if (event.target.value.length > 3) {
      toSend("false");
    }
  };

  //  change state to show navbar
  const newNavbarState = () => {
    const newNavbar = navbar.map((nNav) => {
      nNav.display = "unset";
      nNav.width = "250px";
      return nNav;
    });
    changeNavbar(newNavbar);
  };
  
  // change state to hide navabr
  const newHideNavbarState = () => {
    const newNavbarHide = navbar.map(nNav => {
      nNav.display = 'none';
      nNav.width = '0';
      return nNav;
    })
    changeNavbar(newNavbarHide);
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
          display: { display },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          outline: "0",
          background: "rgba(0,0,0,0.70)",
          transition: "all .5s ease",
        }}
      >
        <TextField
          className={classes.search_input}
          variant="outlined"
          label="Search"
        />
      </Box>
      <Toaster />
      <Box
        sx={{
          width: navbar[0].width,
          height: "100%",
          display: navbar[0].display,
          backgroundColor: "#fff",
          position: "fixed",
          zIndex: "10",
          boxShadow: "0 0 10px #000",
          transition: 'all .6s ease'
        }}
      >
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Articles" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About React" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="About Me" />
          </ListItem>
          <Divider light />
        </List>

        <Box>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Oh"
              icon={<SentimentDissatisfiedIcon />}
            />
            <BottomNavigationAction
              label="Good"
              icon={<SentimentSatisfiedAltIcon />}
            />
            <BottomNavigationAction label="Great" icon={<MoodIcon />} />
          </BottomNavigation>
        </Box>
        <Box
          sx={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField
            onInput={onInputChange}
            variant="standard"
            label="Write Somthing To Me"
          />
          <Button onClick={sendToMe} variant="contained">
            Send to me
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <CancelPresentationIcon onClick={newHideNavbarState} />
        </Box>
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
                onClick={newNavbarState}
              >
                <MenuIcon className={classes.navbar_icon_header} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Tooltip title="Search">
                  <SearchIcon
                    onClick={searchShow}
                    className={classes.search_icon_header}
                  />
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
