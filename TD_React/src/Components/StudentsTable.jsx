import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/students.json";

function StudentsTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((student) => (
            <TableRow key={student.student.id}>
              <TableCell>{student.student.id}</TableCell>
              <TableCell>{student.student.firstname}</TableCell>
              <TableCell>{student.student.lastname}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentsTable;
