import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

export default function Navbar() {
  return (
       <div className="navbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: "#f4f4ef" }}>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: "#0f0f0e" }}
              ></Typography>
              <ul className="nav-list">
                <li className="nav-list-item">
                  <Link to="/" style={linkStyle}>
                    Home
                  </Link>
                </li>
                <li className="nav-list-item">
                  <Link to="/login" style={linkStyle}>
                    Login
                  </Link>
                </li>
              </ul>
            </Toolbar>
          </AppBar>
        </Box>
        </div>
   
  );
}
