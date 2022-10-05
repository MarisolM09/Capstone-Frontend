import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  let navigate = useNavigate();

  // set state and handles for SignUp()
  const [hiker, setHiker] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setHiker({ ...hiker, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    return await axios
      .post("https://capstone-backend-sigma.vercel.app/auth/signup", hiker)
      .catch((err) => console.error(err));
  };

  // set state and handles for Login()
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set cookie here
    document.cookie = "loggedIn=true;Max-Age=60*1000"

    navigate("/dashboard");
    // console.log("login");
    // return await axios
    //   .post("https://capstone-backend-sigma.vercel.app/auth/login", login)
    //   .catch((err) => console.error(err));
  } 
 



  //  let cookies = cookie.parse(document.cookie);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const textField = {
    backgroundColor: "white",
    marginBottom: "15px",
  };

  return (
    <div className="login-container">
      <div className="main-login">
        <div className="create-acc">
          <p className="acc-p">Please create an account</p>
          <p>
            It's a simple process that will take only a minute. When you log in,
            you can start saving hikes.
          </p>
          <form onSubmit={handleSignup}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={textField}
              name="first_name"
              value={hiker.first_name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={textField}
              name="last_name"
              value={hiker.last_name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              style={textField}
              name="email"
              value={hiker.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={textField}
              name="password"
              value={hiker.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              className="login-btn"
              sx={{ color: "white", backgroundColor: "#e9a82c" }}
            >
              Sign-up
            </Button>
          </form>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <p className="p-login">Please Login</p>

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={textField}
              name="email"
              value={login.email}
              onChange={handleLogin}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              style={textField}
              name="password"
              value={login.password}
              onChange={handleLogin}
            />

            <Button
              type="submit"
              variant="contained"
              className="login-btn"
              sx={{ color: "white", backgroundColor: "#e9a82c" }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      <footer class="footer"></footer>
    </div>
  );
  }
