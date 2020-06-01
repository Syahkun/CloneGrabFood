const initialState = {
  nama_pengguna: "",
  kata_kunci: "",
  token: "",
  is_loading: true,
  is_login: false,
};

export default function penggunaReducer(penggunaState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_PENGGUNA":
      return {
        ...penggunaState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...penggunaState,
        nama_pengguna: action.payload.nama_pengguna,
        alamat: action.payload.alamat,
        is_login: true,
        is_loading: false,
      };
    case "LOGOUT":
      return {
        ...penggunaState,
        is_login: false,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...penggunaState,
        is_login: false,
      };
    default:
      return penggunaState;
  }
}
