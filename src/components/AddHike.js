import React from "react";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

export default function AddHike(props) {
  const [hike, setHike] = useState({ id: props.hikes.length + 1 });

  const handleAdd = () => {
    props.addHike(hike);
    setHike({
      hike_name: "",
      location: "",
      hike_length: "",
      elevation_gain: "",
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
            name="hike_name"
            label="Hike Name"
            type="text"
            variant="standard"
            value={hike.hike_name}
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
            name="hike_length"
            label="Length"
            type="text"
            variant="standard"
            value={hike.hike_length}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="elevation_gain"
            label="Elevation Gain"
            type="text"
            variant="standard"
            value={hike.elevation_gain}
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
