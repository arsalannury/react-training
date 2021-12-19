import { Component } from "react";
import Gallery from "./Gallery";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

class GalleryAll extends Component {
  state = {
    apiUsers: [],
  };
  newUser = [];

  getUser = () => {
    fetch("https://api.freerealapi.com/blogs")
      .then((res) => {
        return res.json();
      })
      .then((resultRes) => {
        resultRes.blogs.map((each, index) => {
          const newUser = each.user;
          this.setState({ apiUsers: newUser });
          this.newUser.push(this.state.apiUsers);
        });
      });
  };

  render() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Button variant="contained" onClick={this.getUser}>
            Who Use React
          </Button>
        </Box>
        <Box sx={{
            margin : '30px'
        }}>
          {this.newUser.map((users, index) => (
            <Gallery key={index} id={users.id} title={users.name} />
          ))}
        </Box>
      </>
    );
  }
}
export default GalleryAll;
