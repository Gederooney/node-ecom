import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/scss/shoppingcart.scss";

//actions
import { setQuantity, removeFromCart } from "../../redux/actions/cartActions";
//components
import Itemcard from "./Itemcard";

//icons
import Closeicon from "../../assets/images/icons/Closeicon";

const Shoppingcart = ({ cart, setQuantity, removeFromCart }) => {
	const [reload, setReaload] = useState(1);
	useEffect(() => {
		console.log(reload);
	}, [reload]);
	const reduceByOne = (id) => {
		const item = cart.find((item) => item.product._id === id);
		if (item.quantity)
			setQuantity({
				id: item.product._id,
				quantity: item.quantity - 1,
			});
		setReaload(reload + 1);
	};
	const increaseByOne = (id) => {
		const item = cart.find((item) => item.product._id === id);
		if (item.quantity >= 0)
			setQuantity({
				id: item.product._id,
				quantity: item.quantity + 1,
			});
		setReaload(reload + 1);
	};
	const deleteItem = (id) => {};
	return (
		<section className=" mt-5 mb-5 p-3 shopping-cart bg-secondary">
			<div className="d-flex justify-content-center row">
				<div className="col-md-12">
					<div className="d-flex flex-row justify-content-between p-2">
						<h4>Shopping cart</h4>
						<div className="btn" onClick={() => {}}>
							<Closeicon />
						</div>
					</div>
					{/* <Itemcard product={product} quantity={2} />
					<hr />
					<Itemcard product={product} quantity={3} /> */}
					{cart.map((item, index) => {
						return (
							<>
								<Itemcard
									item={cart[index]}
									key={cart[index].product._id}
									increaseByOne={increaseByOne}
									reduceByOne={reduceByOne}
									deleteItem={deleteItem}
								/>
								{index + 1 !== cart.length ? <hr /> : ""}
							</>
						);
					})}
				</div>
			</div>
		</section>
	);
};

Shoppingcart.propTypes = {
	setQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	cart: state.cartStateHandler,
});

export default connect(mapStateToProps, { setQuantity, removeFromCart })(
	Shoppingcart
);
