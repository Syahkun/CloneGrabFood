import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//import reducer
// import newsReducer from "./reducer/newsReducer";
import menuReducer from "./reducer/menuReduce";
import makananReducer from "./reducer/makananReduce";
import penggunaReducer from "./reducer/penggunaReduce";

const rootReducer = combineReducers({
  // news: newsReducer,
  menu: menuReducer,
  makanan: makananReducer,
  pengguna: penggunaReducer,

  // movies: moviesReducer,
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;
