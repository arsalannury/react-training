import { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class Protect extends Component {
  render() {
    const { component: Routing, ...restProps } = this.props;
    const isAuth = localStorage.getItem("token");
    return (
      <>
        <Route
          {...restProps}
          render={(props) => {
            return isAuth ? <Routing {...props} /> : <Redirect to={"/login"} />;
          }}
        />
      </>
    );
  }
}

export default Protect;
