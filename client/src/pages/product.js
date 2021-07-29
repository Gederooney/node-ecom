import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footer";
import Productpage from "../components/Product/Productpage";

const Product = ({ cart, setItems }) => {
	return (
		<>
			<Navbar items={cart.length} />
			<Productpage setItems={setItems} />
			<Footer />
		</>
	);
};
Product.propTypes = {
	cart: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) => ({
	cart: state.cartStateHandler,
	setItems: props.setItems,
});
export default connect(mapStateToProps)(Product);
