import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

export const getListRestoranByCategory = (category="", lokasi="") => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/Restoran/daftar")
      .then((response) => {
       let result=response.data
        if (category !== ""){
          const category_list = result.filter((item) => item.menu.nama_menu === category)
          result = category_list
        }
        if (lokasi !== "") {
          const lokasi_list = result.filter((item) => item.lokasi.lokasi_restoran === lokasi)
          result = lokasi_list
        }
        dispatch({
          type: "REQUEST_LIST_RESTORAN",
          payload: result
            // .filter((item) => item.menu.nama_menu === category)
            // .filter((item) => item.lokasi.lokasi_restoran === lokasi),
        });
        console.warn("cek payload restoran", response.data);
      })
      .catch((errror) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};

export const getListRestoranBySearch = (category, lokasi) => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/Restoran/daftar")
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_RESTORAN",
          payload: response.data
            .filter((item) => item.menu.nama_menu === category)
            .filter((item) => item.lokasi.lokasi_restoran === lokasi),
        });
        console.warn("cek payload restoran", response.data);
      })
      .catch((errror) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};

export const getListLokasiRestoran = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/lokasi/daftar")
      .then((response) => {
        // {response.map((item, key) =>(item.data.lokasi_restoran))}
        dispatch({
          type: "REQUEST_LIST_LOKASI_RESTORAN",
          payload: response.data
        });
        console.warn("cek payload lokasi res", response.data);
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