import { REMOVE_FROM_CART, ADD_TO_CART } from "../constants/types";

export const addToCart = (product) => async (dispatch) => {
	dispatch({ type: ADD_TO_CART, payload: product });
};
