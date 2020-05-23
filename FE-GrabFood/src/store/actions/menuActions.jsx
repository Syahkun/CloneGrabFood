import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

export const getListMenu = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/menu/daftar")
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_MENU",
          payload: response.data,
        });
      })
      .catch((errror) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};
