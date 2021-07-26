import React from "react";

//Components import
import Navbar from "../components/Headers/Navbar";
import Login from "../components/Auth/Login";
import Footer from "../components/Footer";

const Auth = (props) => {
	if (props.register)
		return (
			<>
				<Navbar />
				<Footer />
			</>
		);
	return (
		<>
			<Navbar />
			<Login />
			<Footer />
		</>
	);
};

export default Auth;
