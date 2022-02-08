import Users from "./Users/Users";
import EachUser from "./Users/EachUser";
import Login from "./Account/Login";
import NotFound from "./NotFound/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import "../Index.css";
import Dashboard from "./PrivteRoutes/Dashboard";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }

    const response = {
      data: {
        user: {
          email: "",
          password: "",
        },
      },
    };

    if (!response.data.user) {
      setUser(null);
      return;
    }

    setUser(response.data.user);
  }, []);

  return (
    <>
      <Switch>
        <Route path={"/user/:id"} component={EachUser} />
        <Route path={"/login"} component={Login} />
        <Route path={"/notFound"} component={NotFound} />
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/"} exact component={Users} />
        <Redirect to={"/notFound"} />
      </Switch>
    </>
  );
};

export default App;
