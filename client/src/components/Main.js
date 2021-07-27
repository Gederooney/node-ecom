import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { Redirect } from "react-router-dom";

// Components import
import Card from "./Product/Card";
import Error from "../pages/Error";

const Main = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		fetchProducts();
	}, []);
	const fetchProducts = async () => {
		try {
			setLoading(true);
			const res = await axios.get("/api/products");
			setProducts(res.data);
			return setLoading(false);
		} catch (error) {
			setError(error.message);
			return setLoading(false);
		}
	};
	if (loading) return <>Loading</>;
	if (error) return <Error message={error}></Error>;
	return (
		<div className="container px-4 px-lg-5 mt-5">
			<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
				{products.map((product) => {
					return (
						<div className="col mb-5" key={product._id}>
							<Card
								poster={product.poster}
								productName={product.productName}
								price={product.price}
								salePrice={product.salePrice}
								sale={product.sale}
								rate={product.rate}
								id={product._id}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
