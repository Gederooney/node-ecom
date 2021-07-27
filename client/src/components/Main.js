import React from "react";
import { Link } from "react-router-dom";

// Components import
import Card from "./Product/Card";

//data import
import "../variables/data";
import data from "../variables/data";

const Main = () => {
	return (
		<div class="container px-4 px-lg-5 mt-5">
			<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
				{data.products.map((product) => {
					return (
						<div className="col mb-5">
							<Link to={"/product/" + product._id}>
								<Card
									key={product.id}
									poster={product.poster}
									productName={product.productName}
									price={product.price}
									salePrice={product.salePrice}
									sale={product.sale}
									rate={product.rate}
									id={product.id}
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
