import { Component } from "react";
import Product from "./Product";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

class Products extends Component {
  
  render() {
    return (
      <>
        <Button
          sx={{
            width: "100%",
            marginBottom: "40px",
          }}
          variant="contained"
          onClick={this.props.reseted}
        >
          Reset All
        </Button>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {this.props.stateProduct.map((geting, index) => (
            <Product
              key={index}
              id={geting.id}
              image={geting.image}
              name={geting.name}
              price={geting.price}
              count={geting.count}
              increment={this.props.inc}
              decrement={this.props.dec}
              deleted={this.props.del}
              reset={this.props.reseted}
            />
          ))}
        </Container>
      </>
    );
  }

  
}

export default Products;
