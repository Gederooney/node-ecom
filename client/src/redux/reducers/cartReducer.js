import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SET_QUANTITY,
} from "../constants/types";

const initialState = [];

const cartStateHandler = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TO_CART:
			state.push(payload);
			return state;
		case SET_QUANTITY:
			state.find((item) => item.product._id === payload.id).quantity =
				payload.quantity;
			return state;
		case REMOVE_FROM_CART:
		default:
			return state;
	}
};

export default cartStateHandler;
