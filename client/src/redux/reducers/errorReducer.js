import { ERROR } from "../constants/types";

const initialState = {
	thereIsError: false,
	errorMessage: "",
};
export default function errorReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case ERROR:
			return {
				thereIsError: true,
				errorMessage: payload,
			};
		default:
			return state;
	}
}
