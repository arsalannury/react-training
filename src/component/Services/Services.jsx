import { Component } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Service from "./Service";

class Services extends Component {
  state = {
    information: [
      {
        id: "1",
        number: "One",
        title: "React",
        count: 12,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vel dignissimos sunt tenetur cum aut quidem iusto excepturi nemo consequatur. Consequuntur ipsum perferendis, eius debitis recusandae obcaecati sint quibusdam laudantium!",
      },
      {
        id: "2",
        number: "Two",
        title: "Redux",
        count: 14,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vel dignissimos sunt tenetur cum aut quidem iusto excepturi nemo consequatur. Consequuntur ipsum perferendis, eius debitis recusandae obcaecati sint quibusdam laudantium!",
      },
      {
        id: "3",
        number: "Three",
        title: "Mui",
        count: 17,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vel dignissimos sunt tenetur cum aut quidem iusto excepturi nemo consequatur. Consequuntur ipsum perferendis, eius debitis recusandae obcaecati sint quibusdam laudantium!",
      },
      {
        id: "4",
        number: "Four",
        title: "React Saga",
        count: 10,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vel dignissimos sunt tenetur cum aut quidem iusto excepturi nemo consequatur. Consequuntur ipsum perferendis, eius debitis recusandae obcaecati sint quibusdam laudantium!",
      },
    ],
    cardDisplay: "unset",
  };

  emptyCard = (event) => { 
    if (event.currentTarget.children.length <= 1) {
      this.setState({ cardDisplay: "none" });
    }
  };

  render() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            marginTop: "50px",
            position: "relative",
          }}
          onMouseMove={this.emptyCard}
        >
          <Button
            sx={{
              alignSelf: "center",
              position: "absolute",
              top: "0",
              display: this.state.cardDisplay,
            }}
            variant="outlined"
            onClick={this.handleReset}
          >
            Reset Card
          </Button>
          {this.state.information.map((inf, index) => (
            <Service
              key={index}
              id={inf.id}
              number={inf.number}
              title={inf.title}
              text={inf.text}
              count={inf.count}
              increment={this.handleIncrement}
              decrement={this.handleDecrement}
              delete={this.handleDelete}
            />
          ))}
        </Box>
      </>
    );
  }

  handleIncrement = (ids) => {
    const newState = [...this.state.information];
    const index = newState.findIndex((ind) => ind.id === ids);
    newState[index].count += 1;
    this.setState({ information: newState });
  };

  handleDecrement = (ids) => {
    const newState = [...this.state.information];
    const index = newState.findIndex((ind) => ind.id === ids);
    newState[index].count -= 1;
    this.setState({ information: newState });
  };

  handleDelete = (ids) => {
    const deleted = this.state.information.filter(
      (idState) => idState.id !== ids
    );
    this.setState({ information: deleted });
  };

  handleReset = () => {
    const reseted = this.state.information.map((states) => {
      states.count = 0;
      return states;
    });
    this.setState({ information: reseted });
  };
}
export default Services;
