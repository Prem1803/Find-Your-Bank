import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const HeaderFilters = ({ selectedPage, city, setCity, data, setFiltered }) => {
  const [category, setCategory] = useState("bankName");
  const [search, setSearch] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSearch("");
  };
  const handleSearchChange = (event) => {
    let query = event.target.value;
    setSearch(query);
    filterData(query);
  };
  const filterData = (query) => {
    if (query !== "") {
      const filtered = data.filter((bank) => {
        switch (category) {
          case "bankName":
            return bank.bank_name.toLowerCase().includes(query.toLowerCase());
          case "branch":
            return bank.branch.toLowerCase().includes(query.toLowerCase());
          case "ifsc":
            return bank.ifsc.toLowerCase().includes(query.toLowerCase());
          case "id":
            return bank.bank_id.toString().includes(query.toLowerCase());
          case "address":
            return bank.address.toLowerCase().includes(query.toLowerCase());
          default:
            break;
        }
      });
      setFiltered(filtered);
    } else {
      setFiltered(null);
    }
  };
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="selectedPage">{selectedPage}</InputLabel>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="city-label">City</InputLabel>
        <Select
          labelId="city-label"
          id="city"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={"BANGALORE"}>Bangalore</MenuItem>
          <MenuItem value={"JAIPUR"}>Jaipur</MenuItem>
          <MenuItem value={"JODHPUR"}>Jodhpur</MenuItem>
          <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
          <MenuItem value={"PUNE"}>Pune</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="category-label">Search Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          label="Search Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value={"bankName"}>Bank Name</MenuItem>
          <MenuItem value={"branch"}>Branch</MenuItem>
          <MenuItem value={"ifsc"}>IFSC</MenuItem>
          <MenuItem value={"id"}>Bank ID</MenuItem>
          <MenuItem value={"address"}>Address</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel htmlFor="search-label">Search</InputLabel>
        <OutlinedInput
          id="search-label"
          value={search}
          onChange={handleSearchChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
    </div>
  );
};

export default HeaderFilters;
