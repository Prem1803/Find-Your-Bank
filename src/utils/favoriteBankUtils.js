const getAllFavoriteBanks = () => {
  try {
    let favoriteBanks = localStorage.getItem("favoriteBanks");
    if (favoriteBanks) {
      favoriteBanks = JSON.parse(favoriteBanks);
      return favoriteBanks;
    }
    return [];
  } catch (error) {
    throw new Error(error.message);
  }
};
const getCityFavoriteBanks = (city) => {
  try {
    let allFavoriteBanks = getAllFavoriteBanks();
    const allCityBanks = allFavoriteBanks.filter((bank) => {
      return bank.city === city;
    });
    return allCityBanks;
  } catch (error) {
    throw new Error(error.message);
  }
};
const addToFavoriteBanks = (bank) => {
  try {
    let allFavoriteBanks = getAllFavoriteBanks();
    allFavoriteBanks = allFavoriteBanks.filter((bankObj) => {
      return bankObj.ifsc !== bank.ifsc;
    });
    allFavoriteBanks.push(bank);
    localStorage.setItem("favoriteBanks", JSON.stringify(allFavoriteBanks));
    return allFavoriteBanks;
  } catch (error) {
    throw new Error(error.message);
  }
};
const removeFromFavoriteBanks = (bank) => {
  try {
    let allFavoriteBanks = getAllFavoriteBanks();
    allFavoriteBanks = allFavoriteBanks.filter((bankObj) => {
      return bankObj.ifsc !== bank.ifsc;
    });
    localStorage.setItem("favoriteBanks", JSON.stringify(allFavoriteBanks));
    return allFavoriteBanks;
  } catch (error) {
    throw new Error(error.message);
  }
};
const isFavoriteBank = (bank) => {
  try {
    let allFavoriteBanks = getAllFavoriteBanks();
    const isFavorite = allFavoriteBanks.filter((bankObj) => {
      return bankObj.ifsc === bank.ifsc;
    });
    if (isFavorite.length) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  getAllFavoriteBanks,
  getCityFavoriteBanks,
  addToFavoriteBanks,
  removeFromFavoriteBanks,
  isFavoriteBank,
};
