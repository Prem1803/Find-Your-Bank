import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

const BankList = ({ data, setData, favoritePage, city }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns = [
    { id: "favorite", label: "Favorite", minWidth: 100 },
    { id: "bank_name", label: "Bank", minWidth: 200 },
    { id: "ifsc", label: "IFSC", minWidth: 150 },
    { id: "branch", label: "Branch", minWidth: 200 },
    { id: "bank_id", label: "Bank ID", minWidth: 100 },
    {
      id: "address",
      label: "Address",
      minWidth: 300,
    },
  ];

  return (
    <>
      {data.length === 0 ? (
        `Sorry , Their are no banks matching this search query.`
      ) : (
        <TableContainer sx={{ height: "65vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.ifsc}
                      state={{ details: row }}
                    >
                      {columns.map((column, index) => {
                        const value = row[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Link
                              to={`/bank-details/${row.ifsc}`}
                              state={{ details: row }}
                              style={{ textDecoration: "none" }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </Link>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default BankList;
