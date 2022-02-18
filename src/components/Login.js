import { Component } from "react";
import axios from "axios";
import * as yup from "yup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        password: "",
        email: "",
      },
      error: [],
      result: true,
      isLoading: false,
    };
  }

  schema = yup.object().shape({
    email: yup
      .string()
      .required("Please Enter Your Email")
      .email("Enter Your Email Currectly"),
    password: yup.string().required("Please Enter Your Password"),
  });

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.user, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ error: error.errors });
      this.setState({ result: true });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();

    try {
      if (result) {
        this.setState({ result: false });
        this.setState({ isLoading: true });
        const response = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        this.setState({ isLoading: false });
        localStorage.setItem("token", response.data.token);
        window.location = "/dashboard";
      }
    } catch (error) {
      this.setState({ result: true });
      this.setState({ error: ["something wrong"] });
      this.setState({ isLoading: false });
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  render() {
    return (
      <>
        {this.state.result
          ? this.state.error.map((error, index) => (
              <>
                <div key={index} className="alert alert-danger" role="alert">
                  {error}
                </div>
              </>
            ))
          : null}
        <form onSubmit={this.handleSubmit} style={{ margin: "50px" }}>
          <div style={{ margin: "30px" }} className="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              onChange={this.handleChange}
              name="email"
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div style={{ margin: "30px" }} className="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              onChange={this.handleChange}
              name="password"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div>
          <button
            type="submit"
            style={{ margin: "30px" }}
            className="btn btn-primary"
            disabled={this.state.isLoading}
          >
            login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
