import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Element/Navbar";
import Grid from "@mui/material/Grid";
import Sidebar from "../Element/Sidebar";
import DetailCard from "../Element/DetailCard";
const BankDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bankDetails, setBankDetails] = useState({});
  useEffect(() => {
    if (!location.state) {
      navigate("/all-banks");
    } else {
      const { details } = location.state;
      setBankDetails(details);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <DetailCard details={bankDetails} />
        </Grid>
      </Grid>
    </>
  );
};

export default BankDetails;
