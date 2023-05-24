import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} alt="Logo" width="120" height="80" className="d-inline-block align-text-top ms-2"/>
				</Link>
				<div className="navbar-end" id="navbarSupportedContent">
					<div className="dropdown">
						<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-sm-end">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
			</nav>
	);
};
