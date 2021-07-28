import axios from "../../utils/axios";
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	ERROR,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_FETCHED,
	PRODUCT_DETAILS_FAIL,
} from "../constants/types";

export const fetchProducts = () => async (dispatch) => {
	dispatch({ type: PRODUCT_LIST_REQUEST });
	try {
		const res = await axios.get("/api/products");
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL });
		dispatch({ type: ERROR, payload: error.message });
	}
};

export const fetchProductDetails = (id) => async (dispatch) => {
	dispatch({ type: PRODUCT_DETAILS_REQUEST });

	try {
		const res = await axios.get("/api/products/" + id);
		dispatch({ type: PRODUCT_DETAILS_FETCHED, payload: res.data });
	} catch (error) {
		dispatch({ type: PRODUCT_DETAILS_FAIL });
		dispatch({ type: ERROR, payload: error.message });
	}
};
