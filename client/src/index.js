import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";

//components import

//pages import
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Product from "./pages/Product";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Auth login={true} register={false} />
					</Route>
					<Route exact path="/register">
						<Auth login={false} register={true} />
					</Route>
					<Route exact path="/product/:id">
						<Product />
					</Route>
				</Switch>
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
