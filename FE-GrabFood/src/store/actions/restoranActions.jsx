import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

//function to search location and categorymenu in homepage
export const getListRestoranByCategory = (category = "", lokasi = "") => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/Restoran/daftar")
      .then((response) => {
        let result = response.data;
        if (category !== "") {
          const category_list = result.filter(
            (item) => item.menu.nama_menu === category
          );
          result = category_list;
        }
        if (lokasi !== "") {
          const lokasi_list = result.filter(
            (item) => item.lokasi.lokasi_restoran === lokasi
          );
          result = lokasi_list;
        }
        dispatch({
          type: "REQUEST_LIST_RESTORAN",
          payload: result,
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

//function input for location on CardIntro in homepage
export const changeInputLokasi = (el) => {
  return { type: "CHANGE_INPUT_LOKASI", payload: el };
};

// funtion input for input search
// export const changeInputSearch = (el) => {
//   return { type: "CHANGE_INPUT_SEARCH", payload: el };
// };

// funtion input for input search
export const changeInputSearch = (event) => {
  return async (dispatch, getState) => {
    let keyword = getState().restoran.search;
    let lokasi = getState().restoran.lokasi;
    console.warn("cek keyword & lokasi", keyword && lokasi);
    await dispatch({
      type: "CHANGE_INPUT_SEARCH",
      payload: event,
    });
    await dispatch(getListRestoranBySearch(keyword, lokasi));
  };
};

//function for searchpage on input in resultpage
export const getListRestoranBySearch = (keyword, lokasi) => {
  return async (dispatch) => {
    if (keyword.length > 1) {
      await dispatch({
        type: "ACTIVATE_LOADING",
      });
      try {
        const response = await axios.get(
          baseUrl + "/Restoran/search?keyword=" + keyword
        );
        await dispatch({
          type: "REQUEST_LIST_RESTORAN",
          payload: response.data.filter(
            (item) => item.lokasi.lokasi_restoran === lokasi
          ),
        });
      } catch (error) {
        console.error(error);
      }
    }
    // await dispatch({ type: "ACTIVATE_LOADING" });
    // await axios
    //   .get(
    //     baseUrl + "/Restoran/search?keyword=" + category + "&location=" + lokasi
    //   )
    //   .then((response) => {
    //     dispatch({
    //       type: "REQUEST_LIST_RESTORAN",
    //       payload: response.data,
    //     });
    //     console.warn("cek payload restoran", response.data);
    //   })
    //   .catch((errror) => {
    //     dispatch({
    //       type: "DEACTIVATE_LOADING",
    //     });
    //   });
  };
};

//function to get location for autocomplete on cardintro in Homepage
export const getListLokasiRestoran = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/lokasi/daftar")
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_LOKASI_RESTORAN",
          payload: response.data,
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
