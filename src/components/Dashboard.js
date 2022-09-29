import * as React from "react";
import TotalHikes from "../containers/TotalHikes";
import AddHike from "../containers/AddHike";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Dashboard(props) {
  
  const handleClick = (index) => {
    props.removeHike(index);
  };

  return (
    <div className="Dashboard">
      <AddHike />
      <TotalHikes />
      <div className="Hike-listings">
        <Table style={{ backgroundColor: "#f4f4ef" }}>
          <TableHead style={{ backgroundColor: "#e9a82c" }}>
            <TableRow>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="left">Hike Name</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="left">Length</TableCell>
              <TableCell align="right">Elevation Gain</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.hikes.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="left">{row.length}</TableCell>
                <TableCell align="right">{row.elevation}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>

                <TableCell align="right">
                  <Grid
                    style={{ color: "#e9a82c", cursor: "pointer" }}
                    item
                    xs={8}
                  >
                    <DeleteForeverIcon onClick={() => handleClick(index)}/>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
