import React from "react";
import { TablePagination as Pagginationn } from "@mui/material";

export const Pagination = ({
  volatile,
  page,
  handleChange,
  rowsPerPage,
  handleChangeRowsPerPage,
}) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": { my: 1 },
  };

  return (
    <div sx={style}>
      <Pagginationn
        count={volatile !== undefined ? Math.ceil(volatile?.length) : 0}
        page={page}
        onPageChange={handleChange}
        showFirstButton
        showLastButton
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};
