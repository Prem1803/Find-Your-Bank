import {
  CITY_BANK_LIST_REQUEST,
  CITY_BANK_LIST_SUCCESS,
  CITY_BANK_LIST_FAIL,
} from "../constants/bankConstants";
import axios from "axios";

export const getAllBanksForCity = (city) => async (dispatch, getState) => {
  try {
    const { banks } = getState();
    let cityData = banks.cityBanks[city];
    dispatch({
      type: CITY_BANK_LIST_REQUEST,
    });
    if (!cityData) {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/banks?city=${city}`
      );
      const { data } = response;
      cityData = data;
      dispatch({
        type: CITY_BANK_LIST_SUCCESS,
        payload: { city, data: cityData },
      });
    }
  } catch (e) {
    dispatch({
      type: CITY_BANK_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
