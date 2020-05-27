const initialState = {
  listRestoran: [],
  //listlokasi for autocomplete
  listLokasi: [],
  isLoading: true,
  //lokasi is lokasi that got from input location in cardintro
  lokasi: "",
  //search is keyword that got from input searchpage in resultpage
  search: "",
};

export default function mekananReducer(stateRestoran = initialState, action) {
  switch (action.type) {
    case "REQUEST_LIST_LOKASI_RESTORAN":
      return {
        ...stateRestoran,
        isLoading: false,
        listLokasi: action.payload,
        listAddress: action.payload,
      };
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
    case "CHANGE_INPUT_SEARCH":
      return {
        ...stateRestoran,
        [action.payload.target.name]: action.payload.target.value,
        search: action.payload.target.value,
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
