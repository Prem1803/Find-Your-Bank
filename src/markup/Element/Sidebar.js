import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
}));
const Sidebar = () => {
  return (
    <div style={{ paddingTop: "120px", paddingLeft: "20px" }}>
      <Stack spacing={2}>
        <Link to="/all-banks">
          <Item>All Banks</Item>
        </Link>

        <Link to="/favorites">
          <Item>Favorites </Item>
        </Link>
      </Stack>
    </div>
  );
};

export default Sidebar;
