import React from "react";
import { Link } from "react-router-dom";

//scss
import "../../assets/scss/card.scss";

// components import
import Gradeicon from "../../assets/images/icons/Gradeicon";

const Card = (props) => {
	let rate = [];
	for (var i = 0; i < props.rate; i++) rate.push(<Gradeicon color="#d4af37" />);

	return (
		<div className="card h-100">
			<div
				className={
					props.sale
						? "badge bg-dark text-white position-absolute"
						: "badge bg-dark text-white position-absolute invisible"
				}
				// style="top: 0.5rem; right: 0.5rem"
			>
				Sale
			</div>
			<img
				className="card-img-top"
				src={props.poster}
				alt={props.productName}
			/>
			<div className="card-body p-4">
				<div className="text-center">
					<h5 className="fw-bolder">{props.productName}</h5>
					<div className="d-flex justify-content-center small text-warning mb-2">
						{props.rate ? rate : "Give a first rate"}
					</div>
					{props.sale ? (
						<>
							<span className="text-muted text-decoration-line-through">
								${props.salePrice}
							</span>{" "}
							${props.price}
						</>
					) : (
						<>${props.price}</>
					)}
				</div>
			</div>
			<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
				<div className="text-center d-flex justify-content-between">
					<Link
						className="btn btn-sm btn-outline-dark mt-auto mx-1 text-small"
						to={"/product/:" + props.productId}>
						More
					</Link>
					<Link className="btn btn-sm btn-dark mt-auto mx-1" to="/cart">
						Add to cart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
