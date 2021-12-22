import Products from "./Products";
import BadgeAll from "./BadgeAll";
import { Component } from "react";

class Root extends Component {
  state = {
    getProducts: [
      {
        id: "1",
        image: "meta-logo.png",
        name: "Iphone 13 ",
        price: "1000$",
        count: 0,
      },
      {
        id: "2",
        image: "meta-logo.png",
        name: "Iphone 12 Pro",
        price: "980$",
        count: 0,
      },
      {
        id: "3",
        image: "meta-logo.png",
        name: "Iphone 12",
        price: "1100$",
        count: 0,
      },
      {
        id: "4",
        image: "meta-logo.png",
        name: "Iphone 11 ProMax",
        price: "985$",
        count: 0,
      },
    ],
  };

  render() {
    return(
        <>
        <BadgeAll stateProduct={this.state.getProducts} />
        <Products   
        stateProduct={this.state.getProducts}
        inc={this.handleIncrement}
        dec={this.handleDecrement}
        del={this.handleDelete}
        reseted={this.handleReset}
        />
        </>
    )
  }

  handleIncrement = (ids) => {
    const incrementProduct = [...this.state.getProducts];
    const index = incrementProduct.findIndex((ind) => ind.id === ids);
    incrementProduct[index].count += 1;
    this.setState({ getProducts: incrementProduct });
  };
  handleDecrement = (id) => {
    const decrementProduct = [...this.state.getProducts];
    const index = decrementProduct.findIndex((ind) => ind.id === id);
    decrementProduct[index].count -= 1;
    this.setState({ getProducts: decrementProduct });
  };
  handleDelete = (id) => {
    const deleteProduct = this.state.getProducts.filter(
      (product) => product.id !== id
    );
    this.setState({ getProducts: deleteProduct });
  };
  handleReset = () => {
    const resetProducts = this.state.getProducts.map((product) => {
      product.count = 0;
      return product;
    });
    this.setState({ getProducts: resetProducts });
  };
}
export default Root;
