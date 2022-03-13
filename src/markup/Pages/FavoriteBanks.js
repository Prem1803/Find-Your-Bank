import React, { useEffect, useState } from "react";
import BankList from "../Element/BankList";
import Loader from "../Element/Loader";
import Grid from "@mui/material/Grid";
import Sidebar from "../Element/Sidebar";
import HeaderFilters from "../Element/HeaderFilters";
import Navbar from "../Element/Navbar";
import { getCityFavoriteBanks } from "../../utils/favoriteBankUtils";
const FavoriteBanks = () => {
  const [city, setCity] = useState("JODHPUR");
  const [loading, setLoading] = useState(false);
  const [cityBanks, setCityBanks] = useState([]);
  const [filtered, setFiltered] = useState(null);
  async function fetchBanksForACity(city) {
    try {
      setLoading(true);
      const data = getCityFavoriteBanks(city);
      setCityBanks(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }
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
            selectedPage={"Favorites Banks"}
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
              favoritePage={true}
              city={city}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FavoriteBanks;
