import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/notes.json";

function NotesTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Cours</TableCell>
            <TableCell>Étudiant</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((note) => (
            <TableRow key={note.unique_id}>
              <TableCell>{note.unique_id}</TableCell>
              <TableCell>{note.course}</TableCell>
              <TableCell>
                {note.student.firstname} {note.student.lastname}
              </TableCell>
              <TableCell>{note.date}</TableCell>
              <TableCell>{note.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NotesTable;
