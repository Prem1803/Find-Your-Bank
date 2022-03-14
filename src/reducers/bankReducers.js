import {
  CITY_BANK_LIST_REQUEST,
  CITY_BANK_LIST_SUCCESS,
  CITY_BANK_LIST_FAIL,
} from "../constants/bankConstants";

export const bankReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_BANK_LIST_REQUEST:
      return { loading: true };
    case CITY_BANK_LIST_SUCCESS:
      return { loading: false };
    case CITY_BANK_LIST_FAIL:
      return { loading: false };
    default:
      return state;
  }
};
