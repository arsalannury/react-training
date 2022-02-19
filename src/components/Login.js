import { Component } from "react";
import * as yup from "yup";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      acount: {
        email: "",
        password: "",
      },
      error: [],
      isLoading: false,
      show: false,
    };
  }

  schema = yup.object().shape({
    email: yup.string().required("Enter Your Email"),
    password: yup
      .string()
      .min(4, "Password Should More Than 4")
      .required("Enter Your Password"),
  });

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.acount, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      this.setState({ error: error.errors });
      this.setState({show : true})
      this.setState({isLoading : false})
    }
  };

  hanldeChange = ({ currentTarget: input }) => {
    const acount = { ...this.state.acount };
    acount[input.name] = input.value;
    this.setState({ acount });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({isLoading : true})
    const result = await this.validate();
    try {
      if (result) {
        const response = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        this.setState({isLoading : false})
        this.setState({show : false})
        localStorage.setItem("token", response.data.token);
        window.location = "/dashboard";
      }
    } catch (error) {
      this.setState({ error: ["Something Wrong !!!"] });
      this.setState({show : true})
      this.setState({isLoading : false})
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div style={{ margin: "50px" }} className="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
              onChange={this.hanldeChange}
            />
          </div>
          <div style={{ margin: "50px" }} className="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              name="password"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
              onChange={this.hanldeChange}
            />
          </div>
          <button
            style={{ margin: "50px" }}
            type="submit"
            disabled={this.state.isLoading}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
        {this.state.show ? (
          <>
            {this.state.error.map((er,index) => (
              <div key={index} style={{margin : '50px'}} class="alert alert-danger" role="alert">
              {er}
            </div>
            ))}
          </>
        ) : null}
      </>
    );
  }
}

export default Login;
