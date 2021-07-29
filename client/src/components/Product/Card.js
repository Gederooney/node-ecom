import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Actions
import { addToCart } from "../../redux/actions/cartActions";

//scss
import "../../assets/scss/card.scss";

// components import
import Gradeicon from "../../assets/images/icons/Gradeicon";

const Card = ({ cart, product, addToCart, setItems }) => {
	let rate = [];
	for (var i = 0; i < product.rate; i++)
		rate.push(<Gradeicon key={i} color="#d4af37" />);

	return (
		<div className="card h-100">
			<div
				className={
					product.sale
						? "badge bg-dark text-white position-absolute"
						: "badge bg-dark text-white position-absolute invisible"
				}
				// style="top: 0.5rem; right: 0.5rem"
			>
				Sale
			</div>
			<img
				className="card-img-top"
				src={product.poster}
				alt={product.productName}
			/>
			<div className="card-body p-4">
				<div className="text-center">
					<h5 className="fw-bolder">{product.productName}</h5>
					<div className="d-flex justify-content-center small text-warning mb-2">
						{product.rate ? rate : "Give a first rate"}
					</div>
					{product.sale ? (
						<>
							<span className="text-muted text-decoration-line-through">
								${product.salePrice}
							</span>{" "}
							${product.price}
						</>
					) : (
						<>${product.price}</>
					)}
				</div>
			</div>
			<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
				<div className="text-center d-flex justify-content-between">
					<Link
						className="btn btn-sm btn-outline-dark mt-auto mx-1 text-small"
						to={"/product/" + product._id}>
						More
					</Link>
					<button
						className="btn btn-sm btn-dark mt-auto mx-1"
						to="/cart"
						onClick={(e) => {
							if (!cart.find((x) => x.product._id === product._id))
								addToCart({ product: product, quantity: 1 });
							else alert("Le produit est deja dans le panier");
							setItems(cart.length);
						}}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	addToCart: PropTypes.func.isRequired,
	setItems: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	product: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
	cart: state.cartStateHandler,
	product: props.product,
	setItems: props.setItems,
});

export default connect(mapStateToProps, { addToCart })(Card);
