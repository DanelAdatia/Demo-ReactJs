import React from "react";
import { Pagination as Pagginationn } from "@mui/material";

export const Pagination = ({ volatile, page, handleChange }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": { my: 1 },
  };
  console.log(volatile, page, handleChange, "volatile, page, handleChange");

  return (
    <div sx={style}>
      <Pagginationn
        count={
          volatile !== undefined ? Math.ceil(volatile?.length / 10 || 0) : 0
        }
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </div>
  );
};
