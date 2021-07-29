import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//actions

//Components import
import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = ({ cart, setItems }) => {
	return (
		<>
			<Navbar items={cart.length} />
			<Hero />
			<section className="py-5">
				<Main setItems={setItems} />
			</section>
			<Footer />
		</>
	);
};

Home.propTypes = {
	cart: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) => ({
	cart: state.cartStateHandler,
	setItems: props.setItems,
});

export default connect(mapStateToProps)(Home);
