const initialState = {
  listMakanan: [],
  isLoading: true,
  lokasi: "Mojokerto",
  // lokasi: "",
};

export default function mekananReducer(stateMakanan = initialState, action) {
  switch (action.type) {
    case "REQUEST_LIST_MAKANAN":
      return {
        ...stateMakanan,
        isLoading: false,
        listMakanan: action.payload,
      };
    case "CHANGE_INPUT_LOKASI":
      return {
        ...stateMakanan,
        [action.payload.target.name]: action.payload.target.value,
        // lokasi: [action.payload.target.name],
      };
    case "ACTIVATE_LOADING":
      return {
        ...stateMakanan,
        isLoading: true,
      };
    case "DEACTIVATE_LOADING":
      return {
        ...stateMakanan,
        isLoading: true,
      };
    default:
      return stateMakanan;
  }
}
