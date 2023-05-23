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
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="dropdown-menu">
						<li><Link className="dropdown-item" to="#">Action</Link></li>
						<li><Link className="dropdown-item" to="#">Another action</Link></li>
						<li><Link className="dropdown-item" to="#">Something else here</Link></li>
					</ul>
				</div>
			</div>
			</nav>
	);
};
