const initialState = { listMenu: [], isLoading: true };

export default function menuReducer(stateMenu = initialState, action) {
  switch (action.type) {
    case "REQUEST_LIST_MENU":
      return {
        ...stateMenu,
        isLoading: false,
        listMenu: action.payload,
      };
    case "ACTIVATE_LOADING":
      return {
        ...stateMenu,
        isLoading: true,
      };
    case "DEACTIVATE_LOADING":
      return {
        ...stateMenu,
        isLoading: true,
      };
    default:
      return stateMenu;
  }
}
