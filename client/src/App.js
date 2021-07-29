import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";

//components import

//pages import
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Product from "./pages/product";

const App = () => {
	const [items, setItems] = useState(0);
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home items={items} setItems={setItems} />
					</Route>
					<Route exact path="/login">
						<Auth login={true} register={false} />
					</Route>
					<Route exact path="/register">
						<Auth login={false} register={true} />
					</Route>
					<Route exact path="/product/:id">
						<Product items={items} setItems={setItems} />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
