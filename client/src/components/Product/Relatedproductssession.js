import React from "react";
import Relatedproducts from "./Relatedproduct";

const Relatedproductssession = () => {
	return (
		<section className="py-5 bg-light">
			<div className="container px-4 px-lg-5 mt-5">
				<h2 className="fw-bolder mb-4">Related products</h2>
				<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
					<Relatedproducts />
					<Relatedproducts />
					<Relatedproducts />
					<Relatedproducts />
				</div>
			</div>
		</section>
	);
};

export default Relatedproductssession;
