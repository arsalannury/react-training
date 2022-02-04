import { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "@mui/material";
import * as yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

class Login extends Component {
  state = {
    user: {
      password: "",
      email: "",
    },
    errors: [],
    isLoading: false,
  };

  schema = yup.object().shape({
    email: yup
      .string()
      .email("enter email please")
      .required("you must enter email"),
    password: yup
      .string()
      .min(4, "you charecter can't less than 4")
      .required("you must enter pasword"),
  });

  handleChange = ({ currentTarget: input }) => {
    const change = { ...this.state.user };
    change[input.name] = input.value;
    this.setState({ user: change });
  };

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.user);
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
      console.log(error.errors);
      toast.error(error.errors);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    if (result) {
      try {
        this.setState({isLoading : true})
        const response = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        console.log(response);
        toast.success("success login");
        this.setState({isLoading : false})
      } catch (error) {
        this.setState({ errors: ["email or password incorrect"] });
        this.setState({isLoading : false})
        toast.error(this.state.errors);
      }
    }
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Div>
            <Text
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.user.email}
            />
          </Div>

          <Div>
            <Text
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.user.password}
            />
          </Div>
          <Button type="submit" variant="contained">
            {this.state.isLoading === false ? (
              <span>Login</span>
            ) : (
              <span>
                <CircularProgress />
              </span>
            )}
          </Button>
        </Form>
        <Toaster />
      </>
    );
  }
}

export default Login;

const Form = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.input`
  width: 70%;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 4px;
  &::placeholder {
    color: #ccc;
  }
`;
