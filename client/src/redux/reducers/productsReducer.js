import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_FETCHED,
	PRODUCT_DETAILS_FAIL,
} from "../constants/types";

const initialState = {
	loading: false,
	list: [],
};

const productDetailsState = {
	loading: false,
	currentProduct: {},
};

const productReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				list: payload,
			};
		case PRODUCT_LIST_FAIL:
			return {
				loading: false,
				list: [],
			};
		default:
			return state;
	}
};
const productDetailReducer = (state = productDetailsState, action) => {
	const { type, payload } = action;
	switch (type) {
		case PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case PRODUCT_DETAILS_FETCHED:
			return { ...state, currentProduct: payload, loading: false };
		case PRODUCT_DETAILS_FAIL:
			return { ...state, loading: false, currentProduct: {} };
		default:
			return state;
	}
};

const product = { productReducer, productDetailReducer };
export default product;
