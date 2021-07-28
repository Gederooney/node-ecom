import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProductDetails } from "../../redux/actions/productsActions";
import { addToCart } from "../../redux/actions/cartActions";

//icons
import Carticon from "../../assets/images/icons/Carticon";

//components
import Relatedproductssession from "./Relatedproductssession";

const Productpage = ({
	fetchProductDetails,
	currentProduct,
	addToCart,
	cart,
	loading,
	error,
	setLength,
}) => {
	let { id } = useParams();
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		fetchProductDetails(id);
	}, []);
	const handleChanhe = (e) => {
		setQuantity(e.target.value);
	};

	if (!currentProduct) return <>currentProduct not found</>;
	return (
		<>
			<section className="py-5">
				<div className="container px-4 px-lg-5 my-5">
					<div className="row gx-4 gx-lg-5 align-items-center">
						<div className="col-md-6">
							<img
								className="card-img-top mb-5 mb-md-0"
								src={currentProduct.poster}
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="small mb-1">SKU: BST-498</div>
							<h1 className="display-5 fw-bolder">
								{currentProduct.productName}
							</h1>
							<div className="fs-5 mb-5">
								<span className="text-decoration-line-through">$45.00</span>
								<span>$40.00</span>
							</div>
							<p className="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium at dolorem quidem modi. Nam sequi consequatur
								obcaecati excepturi alias magni, accusamus eius blanditiis
								delectus ipsam minima ea iste laborum vero?
							</p>
							<div className="d-flex">
								<input
									className="form-control text-center me-3"
									id="inputQuantity"
									type="num"
									value={quantity}
									style={{ maxWidth: "3rem" }}
									onChange={(e) => handleChanhe(e)}
								/>
								<button
									className="btn btn-outline-dark flex-shrink-0"
									type="button"
									onClick={(e) => {
										addToCart({ currentProduct, quantity });
										setLength(cart.length);
									}}>
									<Carticon />
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Relatedproductssession />
		</>
	);
};

Productpage.propTypes = {
	fetchProductDetails: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	currentProduct: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	setLength: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
	currentProduct: state.productDetailReducer.currentProduct,
	cart: state.cartStateHandler,
	loading: state.productDetailReducer.loading,
	error: state.errorReducer.thereIsError,
	setLength: props.setLength,
});

export default connect(mapStateToProps, { fetchProductDetails, addToCart })(
	Productpage
);
