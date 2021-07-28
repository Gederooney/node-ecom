import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// icons
import Carticon from "../../assets/images/icons/Carticon";

const Cartbutton = (props) => {
	return (
		<>
			<button className="btn btn-outline-dark" type="submit">
				<Carticon className="me-1" color="#000000" />
				Cart
				<span className="badge bg-dark text-white ms-3 rounded-pill">
					{props.length}
				</span>
			</button>
		</>
	);
};
Cartbutton.propTypes = {
	cart: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
	cart: state.cartStateHandler.length,
});

export default connect(mapStateToProps)(Cartbutton);
