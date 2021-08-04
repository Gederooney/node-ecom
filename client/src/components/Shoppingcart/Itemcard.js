import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

//actions
import { setQuantity } from "../../redux/actions/cartActions";

//icons
import Deleteicon from "../../assets/images/icons/Deleteicon";
import Minusicon from "../../assets/images/icons/Minusicon";
import Plusicon from "../../assets/images/icons/Plusicon";

const Itemcard = ({ cart, item, increaseByOne, reduceByOne, deleteItem }) => {
	const { product, quantity } = item;

	return (
		<div className="d-flex flex-row align-items-center justify-content-between my-3 p-2 bg-white">
			<div className="mr-1">
				<img className="rounded" src={product.poster} width="70" alt="" />
			</div>
			<div className="d-flex flex-column align-items-center product-details">
				<span className="font-weight-bold">{product.productName}</span>
				<div className="d-flex flex-row product-desc">
					<div className="size mx-1">
						<span className="text-grey">Size:</span>
						<span className="font-weight-bold">&nbsp;M</span>
					</div>
					<div className="color mx-1">
						<span className="text-grey">Color:</span>
						<span className="font-weight-bold">&nbsp;Grey</span>
					</div>
				</div>
			</div>
			<div className="d-flex flex-row align-items-center qty">
				<span
					className={quantity ? "btn" : "btn invisible"}
					onClick={() => reduceByOne(product._id)}>
					<Minusicon />
				</span>
				<h5 className="text-dark mt-2 mx-3">{quantity}</h5>
				<span className="btn" onClick={() => increaseByOne(product._id)}>
					<Plusicon />
				</span>
			</div>
			<div>
				<h5 className="text-grey">${product.price}</h5>
			</div>
			<div
				className="d-flex align-items-center btn"
				onClick={() => deleteItem(product._id)}>
				<Deleteicon className="" />
			</div>
		</div>
	);
};
Itemcard.propstypes = {
	setQuantity: PropTypes.func.isRequired,
	reduceByOne: PropTypes.func.isRequired,
	increaseByOne: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	item: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
	cart: state.cartStateHandler,
	item: props.item,
});

export default connect(mapStateToProps, { setQuantity })(Itemcard);
