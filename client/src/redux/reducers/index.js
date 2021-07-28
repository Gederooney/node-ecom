import { combineReducers } from "redux";
import product from "./productsReducer";
import errorReducer from "./errorReducer";
const { productReducer, productDetailReducer } = product;
export default combineReducers({
	productReducer,
	productDetailReducer,
	errorReducer,
});
