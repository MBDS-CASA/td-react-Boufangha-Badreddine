import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/course.json";

function MatiereTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Matiere</TableCell>
            
            <TableCell>Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((course) => (
            <TableRow key={course.unique_id}>
              <TableCell>{course.unique_id}</TableCell>
              <TableCell>{course.course}</TableCell>
              
              <TableCell>{course.date}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MatiereTable;
