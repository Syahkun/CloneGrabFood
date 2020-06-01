const initialState = {
  listDummy: [],
  listRestoran: [],
  //listlokasi for autocomplete
  listLokasi: [],
  isLoading: true,
  //lokasi is lokasi that got from input location in cardintro
  lokasi: "",
  //search is keyword that got from input searchpage in resultpage
  search: "",
  //variabel that get lat and lon of lokasi
  lokasiLatLon: [],
  lokasiLat: {},
  lokasiLon: {},
};

export default function mekananReducer(stateRestoran = initialState, action) {
  switch (action.type) {
    case "GET_LIST_JARAK_TERDEKAT":
      return {
        ...stateRestoran,
        listLokasi: action.payload,
        listDummy: action.payload,
      };
    case "GET_LIST_BY_CATEGORY_PROGRAM":
      return {
        ...stateRestoran,
        listLokasi: action.payload,
      };
    case "REQUEST_LOKASI_LAT_LON":
      return {
        ...stateRestoran,
        isLoading: false,
        lokasiLatLon: action.payload,
        lokasiLat: action.payload.lat,
        lokasiLon: action.payload.lon,
      };
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
        listRestoran: action.payload,
        isLoading: false,
      };
    case "CHANGE_INPUT_SEARCH":
      return {
        ...stateRestoran,
        [action.payload.target.name]: action.payload.target.value,
        search: action.payload.target.value,
        listRestoran: action.payload,
        isLoading: false,
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
