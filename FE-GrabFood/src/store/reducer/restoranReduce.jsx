const initialState = {
  listRestoran: [],
  // listTolil: [],
  listLokasi: [],
  isLoading: true,
  lokasi: "",
  // lokasi: "",
};

export default function mekananReducer(stateRestoran = initialState, action) {
  switch (action.type) {
    case "REQUEST_LIST_LOKASI_RESTORAN":
      return {
        ...stateRestoran,
        isLoading: false,
        listLokasi: action.payload,
        listAddress: action.payload
      }
    case "REQUEST_LIST_RESTORAN":
      return {
        ...stateRestoran,
        isLoading: false,
        listRestoran: action.payload,
      };
    case "CHANGE_INPUT_LOKASI":
      return {
        ...stateRestoran,
        [action.payload.target.name]: action.payload.target.value,
        lokasi: action.payload.target.value,
      };
    case "ACTIVATE_LOADING":
      return {
        ...stateRestoran,
        isLoading: true,
      };
    case "DEACTIVATE_LOADING":
      return {
        ...stateRestoran,
        isLoading: true,
      };
    default:
      return stateRestoran;
  }
}
