import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

export const getListMakananByCategory = (category, lokasi) => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/makanan/daftar")
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_MAKANAN",
          payload: response.data
            .filter((item) => item.menu === category)
            .filter((item) => item.kota === lokasi),
        });
        console.warn("cek payload makann", response.data);
      })
      .catch((errror) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};

export const changeInputLokasi = (el) => {
  return { type: "CHANGE_INPUT_LOKASI", payload: el };
};
