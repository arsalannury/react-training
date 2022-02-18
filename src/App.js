import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import  Protect from './components/Protect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acount: null,
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ acount: null });
      return;
    }

    const response = {
      data: {
        acount: {
          name: "arsalan",
          email: "arsalannury@gmail.com",
        },
      },
    };

    if (!response.data.acount) {
      this.setState({ acount: null });
      return;
    }
    this.setState({acount : response.data.acount})
  }
 

  render() {
    return (
      <>
        <Header acount={this.state.acount} />
        <Switch>
          <Protect path={"/dashboard"} component={Dashboard} />
          <Route path={"/login"} component={Login} />
          <Route path={"/logout"} component={Logout} />
          <Redirect from="/register" to={"/login"} />
          <Route path={"/register"} component={Register} />
          <Route path={"/notfound"} component={NotFound} />
          <Route exact path={"/"} component={Home} />
          <Redirect to={"/notfound"} />
        </Switch>
      </>
    );
  }
}

export default App;
