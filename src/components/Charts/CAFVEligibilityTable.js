import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

export default function CAFVEligibilityTable({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>VIN</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>CAFV Eligibility</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.vin}</TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.modelYear}</TableCell>
              <TableCell>{row.cafvEligibility}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
