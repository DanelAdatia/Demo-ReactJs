import React, { useEffect, useState } from "react";
import {
  BestSelling,
  GetListingAndPagination,
  PriceHighToLow,
  PriceLowToHigh,
  UsingName,
  UsingPrice,
} from "../../api/Database.api";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Popper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import PageFormat from "../../components/PageFormat";
import { Pagination } from "../../components/Pagination";

const Database = () => {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const listingData = async () => {
    try {
      const res = await GetListingAndPagination();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const highToLow = async () => {
    try {
      const res = await PriceHighToLow();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const lowToHigh = async () => {
    try {
      const res = await PriceLowToHigh();

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const bestSelling = async () => {
    try {
      const res = await BestSelling();

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const usingName = async () => {
    try {
      const res = await UsingName();

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const usingPrice = async () => {
    try {
      const res = await UsingPrice();

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (type === 1) {
      listingData();
    } else if (type === 2) {
      highToLow();
    } else if (type === 3) {
      lowToHigh();
    } else if (type === 4) {
      bestSelling();
    } else if (type === 5) {
      usingName();
    } else if (type === 6) {
      usingPrice();
    }
  }, [type]);

  const filteredData = data?.filter((item) => {
    const _item$price = String(item.price);

    return (
      _item$price.toLowerCase().includes(search.toLowerCase()) ||
      item?.name?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const items =
    filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) ||
    [];

  return (
    <PageFormat>
      <Box sx={styles.boxContainer}>
        <Typography variant="h5">Database</Typography>
      </Box>
      <Divider />
      <Box>
        <Box
          style={{
            float: "left",
          }}
        >
          <TextField
            size="small"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            label="Search"
          />
        </Box>
        <Box style={{ float: "right" }}>
          <IconButton
            title="Filter"
            aria-describedby={id}
            onClick={handleClick}
          >
            <FilterListIcon />
          </IconButton>
        </Box>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box
            sx={{
              border: 1,
              p: 1,
              bgcolor: "background.paper",
              width: "300px",
            }}
          >
            <FormControl fullWidth>
              <InputLabel
                style={{ backgroundColor: "white" }}
                id="demo-simple-select-label"
              >
                Select Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleChange}
              >
                <MenuItem value={1}>Listing</MenuItem>
                <MenuItem value={2}>Sorting: Price high to low</MenuItem>
                <MenuItem value={3}>Sorting : Price low to high</MenuItem>
                <MenuItem value={4}>Sorting : Best Selling</MenuItem>
                <MenuItem value={5}>Filter : using name</MenuItem>
                <MenuItem value={6}>Filter : using price</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Popper>
        <Divider />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Sell Counter</TableCell>
              <TableCell>Product No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((d, index) => (
              <TableRow key={index}>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.price}</TableCell>
                <TableCell>{d.sellcounter}</TableCell>
                <TableCell>{d.productno}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          page={page}
          handleChange={handleChangePage}
          volatile={data}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </TableContainer>
    </PageFormat>
  );
};

export default Database;

const styles = {
  boxContainer: {
    my: 2,
    mx: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
