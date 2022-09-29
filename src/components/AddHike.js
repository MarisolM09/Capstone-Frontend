import React from "react";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

export default function AddHike(props) {
  const [hike, setHike] = useState({ id: props.hikes.length + 1 });

  const handleAdd = () => {
    props.addHike(hike);
    setHike({
      name: "",
      location: "",
      length: "",
      elevation: "",
      rating: "",
    });
  };

  const handleChange = (e) => {
    setHike({
      ...hike,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-hikes">
      <Container maxWidth="sm">
        <form className="login-form">
          <TextField
            required
            fullWidth
            margin="normal"
            name="name"
            label="Hike Name"
            type="text"
            variant="standard"
            value={hike.name}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="location"
            label="Location"
            type="text"
            variant="standard"
            value={hike.location}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="length"
            label="Length"
            type="text"
            variant="standard"
            value={hike.length}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="elevation"
            label="Elevation Gain"
            type="text"
            variant="standard"
            value={hike.elevation}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="rating"
            label="Rating"
            type="text"
            variant="standard"
            value={hike.rating}
            onChange={handleChange}
          />

          <Button
            // type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#8aab37", width: "200px", margin: "35px" }}
            onClick={handleAdd}
          >
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
}
