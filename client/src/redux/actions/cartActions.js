import {
	REMOVE_FROM_CART,
	ADD_TO_CART,
	SET_QUANTITY,
} from "../constants/types";

export const addToCart = (product) => async (dispatch) => {
	dispatch({ type: ADD_TO_CART, payload: product });
};

export const setQuantity = (item) => async (dispatch) => {
	dispatch({ type: SET_QUANTITY, payload: item });
};

export const removeFromCart = (index) => (dispatch) => {
	dispatch({ type: REMOVE_FROM_CART, payload: index });
};
