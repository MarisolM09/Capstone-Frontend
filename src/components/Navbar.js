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
      <p className="navbar-p">
        "In every walk with nature one receives far more than he needs." - John
        Muir
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#f4f4ef", height: "4.5rem" }}
        >
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
                  HOME
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/login" style={linkStyle}>
                  GO OUTSIDE
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/login" style={linkStyle}>
                  GET INVOLVED
                </Link>
              </li>

              <li className="nav-list-item">
                <Link to="/login" style={linkStyle}>
                  LOGIN
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
