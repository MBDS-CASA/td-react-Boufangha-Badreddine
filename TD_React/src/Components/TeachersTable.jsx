import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/students.json";

function TeachersTable() {
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
          {data.map((teachers) => (
            <TableRow key={teachers.student.id}>
              <TableCell>{teachers.student.id}</TableCell>
              <TableCell>{teachers.student.firstname}</TableCell>
              <TableCell>{teachers.student.lastname}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeachersTable;
