import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from "../../Asserts/logoRegister.svg";
import "./Signup.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import UserService from "../../Services/UserServices";

const User_service = new UserService();

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
      snackbaropen: false,
      accountType: "Customer",
      Alertstatus: null,
      Success: null,

      errors: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackbaropen: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = this.state.errors;

    if (this.state.email == null) {
      errors.email = "Email Id Required";
    }
    if (this.state.password == null) {
      errors.password = "Password Required";
    }
    if (this.state.confirmPassword == null) {
      errors.confirmPassword = "Confirm Password Required";
    }

    if (validateForm(this.state.errors)) {
      console.info("Valid Form");

      if (
        this.state.email === null ||
        this.state.password === null ||
        this.state.confirmPassword === null
      ) {
        console.error("Invalid Form");
      } else {
        const user = {
          email: this.state.email,
          password: this.state.password,
          account_Type: this.state.accountType,
        };

        if (this.state.password === this.state.confirmPassword) {
          console.log("Calling Api");
          console.log("Admin Restriction Condition");
          if (this.state.accountType === "Admin") {
            User_service.AdminRestriction()
              .then((data) => {
                console.log(data.status);
                User_service.SignUp(user)
                  .then((data) => {
                    console.log("Login Data :", data);
                    const object = data.data;
                    console.log(object.success);
                    this.setState({ snackbaropen: true });
                    this.setState({ Success: true });
                  })
                  .catch((error) => {
                    console.log(error);
                    this.setState({ snackbaropen: true });
                    this.setState({ Success: false });
                  });
              })
              .catch((error) => {
                console.log(error);
                this.setState({ snackbaropen: true });
                this.setState({ Success: false });
              });
          } else {
            User_service.SignUp(user)
              .then((data) => {
                console.log("Login Data :", data);
                const object = data.data;
                console.log(object.success);
                this.setState({ snackbaropen: true });
                this.setState({ Success: true });
              })
              .catch((error) => {
                console.log(error);
                this.setState({ snackbaropen: true });
                this.setState({ Success: false });
              });
          }
        } else {
          this.setState({ snackbaropen: true });
          this.setState({ Success: false });
        }
      }
    } else {
      // flags.status = "Failed";
      console.error("Invalid Form");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email Id not valid";
        break;
      case "password":
        errors.password = value.length < 8 ? "Password Not valid" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value.length < 8 ? "Confirm password not valid" : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };

  accountTypeHandle = (event) => {
    event.preventDefault(); // checking for error compilation
    const { value } = event.target;
    console.log(value);
    this.setState({ accountType: value }, () =>
      console.log(this.state.accountType)
    );
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="mainContainer">
        <div className="bodyContainer">
          <div className="sideImageBox">
            <div className="figureBox">
              <div className="image">
                <img src={logo} class="tempimage" alt="Temperature" />
                <figcaption className="figCaption">
                  One account. All Our Management working for you.
                </figcaption>
              </div>
            </div>
          </div>
          <div className="registrationContainer">
            <div className="fundoofont Font-style">TRAVEL SERVICES</div>
            <form className="textFieldBody" onSubmit={this.handleSubmit}>
              <div className="p1">Create your Account</div>
              <div className="All-Input">
                <div className="text">
                  <div className="textColumn1">
                    <TextField
                      autoComplete="off"
                      fullWidth
                      type="email"
                      name="email"
                      label="Email Id"
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      helperText="Use Email ID"
                      required
                      placeholder="@gmail.com"
                      text-align="right"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <div className="error">
                      {errors.email.length > 0 && (
                        <span className="errorMessage">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="textColumn2">
                    <div className="textRow1">
                      <TextField
                        label="Password"
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        name="password"
                        type="password"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                      <div className="error">
                        {errors.password.length > 0 && (
                          <span className="errorMessage">
                            {errors.password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="textRow2">
                      <TextField
                        label="Confirm Password"
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        type="password"
                        name="confirmPassword"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        required
                      />
                      <div className="error">
                        {errors.confirmPassword.length > 0 && (
                          <span className="errorMessage">
                            {errors.confirmPassword}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="passwordHint">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </p>
                </div>
                <div className="radiobutton">
                  <RadioGroup
                    aria-label="Positions"
                    className="radiobutton1"
                    value={this.state.accountType}
                    onChange={this.accountTypeHandle}
                  >
                    <FormControlLabel
                      value="Admin"
                      control={<Radio />}
                      label="Admin"
                    />
                    <FormControlLabel
                      value="Customer"
                      control={<Radio />}
                      label="Customer"
                    />
                  </RadioGroup>
                </div>
                <div className="button">
                  <div className="button1">
                    <Button variant="link" href="/signIn">
                      Sign in instead
                    </Button>
                  </div>
                  <div className="button2">
                    <Button variant="primary" onClick={this.handleSubmit}>
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="AlertMessage">
          {this.state.snackbaropen ? (
            <Snackbar
              open={this.state.snackbaropen}
              autoHideDuration={6000}
              onClose={this.handleSnackbarClose}
            >
              {this.state.Success ? (
                <Alert onClose={this.handleSnackbarClose} severity="success">
                  Registration successful.
                </Alert>
              ) : (
                <Alert onClose={this.handleSnackbarClose} severity="error">
                  Registration Unsuccessful.
                </Alert>
              )}
            </Snackbar>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Signup;
