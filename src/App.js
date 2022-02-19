import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Protect from "./components/Protect";

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ user: null });
      return;
    }

    //  const response = axios.post('api/login',token);

    const response = {
      data: {
        user: {
          email: "arsiiilan@yahoo.com",
          password: "12345",
        },
      },
    };

    if (!response.data.user) {
      this.setState({ user: null });
      return;
    }

    this.setState({ user: response.data.user });
  }

  render() {
    return (
      <>
        <Navbar user={this.state.user} />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Protect path={"/dashboard"} component={Dashboard} />
          <Route path={"/login"} component={Login} />
          <Route path={"/logout"} component={Logout} />
          <Route path={"/notFound"} component={NotFound} />
          <Redirect from="/register" to="/login" />
          <Route path={"/register"} component={Register} />
          <Redirect to={"/notFound"} />
        </Switch>
      </>
    );
  }
}

export default App;
