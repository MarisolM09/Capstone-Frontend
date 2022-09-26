import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';



export default function Login() {
  return (
    <div className="container">
    <div className="main">
    <form>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          label="Username"
          defaultValue=""
          variant="standard"
          style ={{width: '490px'}}
          
        />
        <TextField
          required
          id="standard-required"
          label="Password"
          type="password"
          defaultValue=""
          variant="standard"
          style ={{width: '490px'}}
        />
      </Box>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: '#e0e0e0'}}>Login</Button>
      </form>
    </div>
    <footer class="footer"></footer>
  </div>
  
  );
}
