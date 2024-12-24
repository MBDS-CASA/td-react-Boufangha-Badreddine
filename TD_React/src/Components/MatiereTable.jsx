import React from "react";
import  { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/course.json";
import TextField from "@mui/material/TextField";
import TablePagination from "@mui/material/TablePagination";


function MatiereTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");
  
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
   
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      setPage(0);
    };
    
    const filteredData = data.filter(
      (note) =>
        note.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.student.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.student.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    
    const paginatedData = filteredData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );


  return (
    <div>
    <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              backgroundColor: '#f0f0f0',
                    
            }}
          />
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
            {paginatedData.map((course) => (
              <TableRow key={course.unique_id}>
              <TableCell>{course.unique_id}</TableCell>
              <TableCell>{course.course}</TableCell>
              
              <TableCell>{course.date}</TableCell>
            
            </TableRow>
            ))}
          </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      
    </TableContainer>
    </div>
  );
}

export default MatiereTable;
