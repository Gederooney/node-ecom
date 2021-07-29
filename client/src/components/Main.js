import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//  actions
import { fetchProducts } from "../redux/actions/productsActions";

// Components import
import Card from "./Product/Card";
import Error from "../pages/Error";

const Main = ({
	fetchProducts,
	products,
	loading,
	error,
	errorMessage,
	setItems,
}) => {
	useEffect(() => {
		fetchProducts();
	}, []);

	if (loading) return <>Loading</>;
	if (error) return <Error message={errorMessage}></Error>;
	return (
		<div className="container px-4 px-lg-5 mt-5">
			<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
				{products.map((product) => {
					return (
						<div className="col mb-5" key={product._id}>
							<Card product={product} setItems={setItems} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
Main.propTypes = {
	fetchProducts: PropTypes.func.isRequired,
	setItems: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
	setItems: props.setItems,
	products: state.productReducer.list,
	loading: state.productReducer.loading,
	error: state.errorReducer.thereIsError,
	errorMessage: state.errorReducer.errorMessage,
});

export default connect(mapStateToProps, { fetchProducts })(Main);
