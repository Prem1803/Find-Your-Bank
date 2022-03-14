import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useStore } from "react-redux";
import BankList from "../Element/BankList";
import Loader from "../Element/Loader";
import Grid from "@mui/material/Grid";
import Sidebar from "../Element/Sidebar";
import HeaderFilters from "../Element/HeaderFilters";
import Navbar from "../Element/Navbar";
import { getAllBanksForCity } from "../../actions/bankActions";
const HomePage = () => {
  const store = useStore();
  let banks = store.getState().banks;
  const [city, setCity] = useState("JODHPUR");
  const [loading, setLoading] = useState(false);
  const [cityBanks, setCityBanks] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const dispatch = useDispatch();
  async function fetchBanksForACity(city) {
    try {
      setLoading(true);
      dispatch(getAllBanksForCity(city));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }
  store.subscribe(() => {
    banks = store.getState().banks;

    if (banks.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (banks.cityBanks[city]) {
      setCityBanks(banks.cityBanks[city]);
    }
  });
  useEffect(() => {
    fetchBanksForACity(city);
  }, [city]);

  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <HeaderFilters
            selectedPage={"All Banks"}
            city={city}
            setCity={setCity}
            data={cityBanks}
            setFiltered={setFiltered}
          />
          {loading ? (
            <Loader />
          ) : (
            <BankList
              data={filtered ? filtered : cityBanks}
              setData={setCityBanks}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
