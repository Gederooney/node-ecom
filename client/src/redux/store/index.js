import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //compose with devtools pour etre en mesure de passer le middleware (thunk) lors de la creation du store
import thunk from "redux-thunk";
import rootReducer from "../reducers/index.js";

const initialState = {}; //l'état initial qui sera modifier par des actions dans le store
const middleware = [thunk]; //thunk est un middleware qui est passée lors de la creation du store.

const store = createStore(
	rootReducer, //index des reducers
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
