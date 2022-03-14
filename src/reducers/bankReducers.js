import {
  CITY_BANK_LIST_REQUEST,
  CITY_BANK_LIST_SUCCESS,
  CITY_BANK_LIST_FAIL,
} from "../constants/bankConstants";

export const bankReducer = (state = { cityBanks: {} }, action) => {
  switch (action.type) {
    case CITY_BANK_LIST_REQUEST:
      return { ...state, loading: true };
    case CITY_BANK_LIST_SUCCESS:
      return {
        loading: false,
        cityBanks: {
          ...state.cityBanks,
          [action.payload.city]: action.payload.data,
        },
      };
    case CITY_BANK_LIST_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
