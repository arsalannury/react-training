import { Component } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import './Product.css';

class Product extends Component {
  render() {
      const {image} = this.props;
    return (
      <>
       
          <Box sx={{
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center',
              justifyContent : 'space-evenly',
              boxShadow : '0 0 10px #ccc',
              minWidth : '300px',
              maxWidth : '350px',
              borderRadius : '5px',
              padding : '15px',
              margin : '0 5px 0 5px'
          }}>
            <img className="image" src={image} alt="images_meta" />
            <div className="inf_prod">
              <Typography>{this.props.name}</Typography>
              <Typography>{this.props.price}</Typography>
            </div>
            <ButtonGroup>
              <Button onClick={this.handleIncrement} variant="outlined">+</Button>
              <Button variant="outlined">{this.props.count}</Button>
              <Button onClick={this.handleDelete} variant="contained">Delete Product</Button>
              <Button onClick={this.handleDecrement} variant="outlined">-</Button>
            </ButtonGroup>
          </Box>
       
      </>
    );
  }
  handleIncrement = () => {
      this.props.increment(this.props.id)
  }
  handleDecrement = () => {
      this.props.decrement(this.props.id)
  }
  handleDelete = () => {
      this.props.deleted(this.props.id)
  }
  handleReset = () => {
      this.props.reset()
  }
}

export default Product;
