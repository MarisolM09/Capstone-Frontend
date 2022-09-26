import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  const textField = {
    backgroundColor: "white",
    marginBottom: "15px",
  };

  return (
    <div className="container">
      <div className="main-login">
        <div className="create-acc">
          <p className="acc-p">Please create an account</p>
          <p>
            It's a simple process that will take only a minute. When you log in,
            you can start saving hikes.
          </p>
          <form>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={textField}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={textField}
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              style={textField}
            />

            <Button
              variant="contained"
              className="login-btn"
              sx={{ color: "white", backgroundColor: "#e9a82c" }}
            >
              Sign-up
            </Button>
          </form>
        </div>
        <div className="login-form">
          <form>
            <p className="p-login">Please Login</p>

            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              style={textField}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              style={textField}
            />

            <Button
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
