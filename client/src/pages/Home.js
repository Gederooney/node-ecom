import React from "react";

//Components import
import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<section className="py-5">
				<Main />
			</section>
			<Footer />
		</>
	);
};

export default Home;
