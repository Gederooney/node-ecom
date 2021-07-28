import { combineReducers } from "redux";
import product from "./productsReducer";
import errorReducer from "./errorReducer";
import cartStateHandler from "./cartReducer";

const { productReducer, productDetailReducer } = product;
export default combineReducers({
	productReducer,
	productDetailReducer,
	errorReducer,
	cartStateHandler,
});
