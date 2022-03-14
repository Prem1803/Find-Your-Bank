import {
  CITY_BANK_LIST_REQUEST,
  CITY_BANK_LIST_SUCCESS,
  CITY_BANK_LIST_FAIL,
} from "../constants/bankConstants";

export const getAllBanksForCity = () => async (dispatch) => {
  try {
    dispatch({
      type: CITY_BANK_LIST_REQUEST,
    });

    dispatch({
      type: CITY_BANK_LIST_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: CITY_BANK_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
