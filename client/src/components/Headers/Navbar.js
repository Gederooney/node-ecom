import React from "react";
import { Link } from "react-router-dom";
import Cartbutton from "./Cartbutton";

//asset import
import logo from "../../assets/images/logo.png";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container px-4 px-lg-5">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								to="/shop"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Shop
							</Link>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<Link className="dropdown-item" to="/all">
										All Products
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link className="dropdown-item" to="/mostview">
										Popular Items
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/newarrivals">
										New Arrivals
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<form className="d-flex">
						<Cartbutton length={props.length} />
						<Link className="btn" to="/login">
							Sign In
						</Link>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
