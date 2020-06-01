import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

//function to search location and categorymenu in homepage
export const getListRestoranByProgram = (program = "", promo = "") => {
  console.warn("program", program);
  alert("masuk");
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/Restoran/daftar")
      .then((response) => {
        let result = response.data;
        if (program !== "") {
          const program_list = result.filter(
            (item) => item.program === program
          );
          result = program_list;
        }
        if (promo !== "") {
          const promo_list = result.filter((item) => item.promo === promo);
          result = promo_list;
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

// funtion input for input search
export const changeInputLokasi = (el) => {
  // alert("cek changeinputlokasi");
  // return { type: "CHANGE_INPUT_LOKASI", payload: el };
  return async (dispatch, getState) => {
    // alert("masuk dispatch");
    await dispatch({
      type: "CHANGE_INPUT_LOKASI",
      payload: el,
    });
    let keyword = getState().restoran.search;
    let lokasi = getState().restoran.lokasi;
    console.warn("cek lokasi di change inputlokasi", lokasi);
    console.warn("cek keyword di change inputlokasi", keyword);
    await dispatch(getListRestoranBySearch(keyword, lokasi));
    await dispatch(getLatLonLokasi(lokasi));
    // alert("finish function search lokasi");
  };
};

// funstion input for input search
export const changeInputSearch = (event) => {
  return async (dispatch, getState) => {
    // console.warn("cek keyword & lokasi", keyword && lokasi);
    await dispatch({
      type: "CHANGE_INPUT_SEARCH",
      payload: event,
    });
    let keyword = getState().restoran.search;
    let lokasi = getState().restoran.lokasi;
    await dispatch(getListRestoranBySearch(keyword, lokasi));
  };
};

//function for searchpage on input in resultpage
export const getListRestoranBySearch = (keyword, lokasi) => {
  return async (dispatch) => {
    // alert("masuk serach");
    if (keyword.length > 1 || lokasi.length > 1) {
      await dispatch({
        type: "ACTIVATE_LOADING",
      });
      try {
        const response = await axios.get(
          baseUrl +
            "/Restoran/search?location=" +
            lokasi +
            "&keyword=" +
            keyword
        );
        await dispatch({
          type: "REQUEST_LIST_RESTORAN",
          payload: response.data,
        });
      } catch (error) {
        console.error(error);
      }
    }
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

//function that to get lat and lon by lokasi of reducer restoran
export const getLatLonLokasi = (lokasi) => {
  return async (dispatch, getState) => {
    // let lokasi = getState().restoran.lokasi;
    // console.warn("ini lokasi di latlon", lokasi);
    await axios.get(baseUrl + "/lokasi/daftar").then((response) => {
      // alert("masukdispatchlatlon");
      dispatch({
        type: "REQUEST_LOKASI_LAT_LON",
        payload: response.data.filter(
          (item) => item.lokasi_restoran === lokasi
        ),
      });
      console.warn("cek payload lokasilatlon", response.data);
    });
  };
};

//function that get list from category program
export const getRestoByCategoryProgram = (category) => {
  return async (dispatch) => {
    await axios.get(baseUrl + "/Restoran/daftar").then((response) => {
      dispatch({
        type: "GET_LIST_BY_CATEGORY_PROGRAM",
        payload: response.data.filter((item) => item.program === category),
      });
    });
  };
};

// get distance from lon lat
const distance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (3.14 * lat1) / 180;
    var radlat2 = (3.14 * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (3.14 * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
};

// export const getRestoPlusDistance = (listRestoran) => {
//   return async (dispatch, getState) => {
//     const lokasiLatLon = getState().restoran.lokasiLatLon;
//     const dataList = [];
//     listRestoran.map((item, key) =>
//       lokasiLatLon.map((it, key) =>
//         dataList.push({
//           nama: item.nama,
//           gambar: item.gambar,
//           promo: item.promo,
//           menu: item.menu.nama_menu,
//           distance: distance(item.lat, item.lon, it.lat, it.lon, "K"),
//         })
//       )
//     );
//     return dataList;
//   };
// };

export const getRestoByJarakTerdekat = () => {
  return async (dispatch, getState) => {
    const listRestorans = getState().restoran.listRestoran;
    const lokasiLatLon = getState().restoran.lokasiLatLon;
    const dataList = [];
    listRestorans.map((item, key) =>
      lokasiLatLon.map((it, key) =>
        dataList.push({
          nama: item.nama,
          gambar: item.gambar,
          promo: item.promo,
          nama_menu: item.menu.nama_menu,
          distance: distance(item.lat, item.lon, it.lat, it.lon, "K"),
        })
      )
    );
    console.warn("datalist di action", dataList);
    dispatch({
      type: "GET_LIST_JARAK_TERDEKAT",
      payload: dataList.sort((a, b) => (a.distance > b.distance ? 1 : -1)),
    });
    alert("finish fungsi terdekat");
  };
};
