import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/types";

const initialState = [];

const cartStateHandler = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TO_CART:
			state.push(payload);
			return state;
		default:
			return state;
	}
};

export default cartStateHandler;
