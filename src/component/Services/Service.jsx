import { Component } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


class Service extends Component {
  render() {
    return (
      <>
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 300,
            boxShadow: "0 0 3px #111",
            margin: "50px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
             {this.props.number}
            </Typography>
            <Typography variant="h5" component="div">
              {this.props.title}
            </Typography>
            <Typography variant="body2">
              {this.props.text}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.handleInc} size="small">+</Button>
            <Button size="small">{this.props.count}</Button>
            <Button onClick={this.handleDec} size="small">-</Button>
            <Button onClick={this.handleDel} size="small">delete</Button>
          </CardActions>
        </Card>
      </>
    );
  }
  handleInc = () => {
   this.props.increment(this.props.id)
  }
  handleDec = () => {
    this.props.decrement(this.props.id)
  }
  handleDel = () => {
    this.props.delete(this.props.id)
  }
}
export default Service;
