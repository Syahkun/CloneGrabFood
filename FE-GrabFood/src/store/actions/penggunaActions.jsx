import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

// export const login = (namaPengguna, kataKunci) => {
//   return async (dispatch) => {
//     await dispatch({ type: "ACTIVATE_LOADING" });
//     await axios.get(
//       baseUrl +
//         "/login?nama_pengguna=" +
//         namaPengguna +
//         "&kata_kunci=" +
//         kataKunci
//     )
//     .then((response) => { dispatch ({
//         type: "LOGIN",
//         payload:
//     })})
//   };
// };

export const doLogin = () => {
  return async (dispatch, getState) => {
    const namaPengguna = getState().pengguna.namaPengguna;
    const kataKunci = getState().pengguna.kataKunci;

    await axios
      .get(baseUrl + "/login", {
        params: {
          nama_pengguna: namaPengguna,
          kata_kunci: kataKunci,
        },
      })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          console.warn("cek response data user", response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("namaPengguna", namaPengguna);
          localStorage.setItem("is_login", true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputPengguna = (element) => {
  return { type: "CHANGE_INPUT_PENGGUNA", payload: element };
};

export const doLogout = (e) => {
  localStorage.clear();
  return {
    type: "LOGOUT",
    payload: e,
  };
};

export const postPengguna = (props) => {
  // alert("belum masuk");
  return async (dispatch, getState) => {
    // alert("sudah masuk");
    // const status = getState().user.status;
    const bodyRequest = {
      nama_pengguna: getState().pengguna.namaPengguna,
      kata_kunci: getState().pengguna.kataKunci,
      alamat: getState().pengguna.alamat,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post(baseUrl + "/pengguna", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        // localStorage.setItem("status", status);
        dispatch({
          type: "SUCCESS_SIGNUP",
        });
      });
  };
};
