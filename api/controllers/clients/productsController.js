import data from "../../variables/data.js";
const getProducts = async (req, res) => {
	try {
		res.send(data.products);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
};

export { getProducts };
