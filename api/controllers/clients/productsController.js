import data from "../../variables/data.js";
const getProducts = async (req, res) => {
	try {
		res.send(data.products);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
};

const getProductDetails = (req, res) => {
	try {
		res.status(200).send(data.products.find((x) => x._id === req.params.id));
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
};

export { getProducts, getProductDetails };
