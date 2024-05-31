import { combineReducers } from "redux";
import pageReducer from "@redux/slices/pageSlice";
import menuReducer from "@redux/slices/menuSlice";
import languageReducer from "@redux/slices/languageSlice";
import cartReducer from "@redux/slices/cartSlice";

const rootReducer = combineReducers({
  pages: pageReducer,
  menu: menuReducer,
  lang: languageReducer,
  cart: cartReducer,
});

export default rootReducer;
