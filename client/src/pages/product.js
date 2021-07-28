import React, { useState, useEffect } from "react";

import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footer";
import Productpage from "../components/Product/Productpage";

const Product = () => {
	const [length, setLength] = useState(0);

	return (
		<>
			<Navbar length={length} />
			<Productpage setLength={setLength} />
			<Footer />
		</>
	);
};

export default Product;
