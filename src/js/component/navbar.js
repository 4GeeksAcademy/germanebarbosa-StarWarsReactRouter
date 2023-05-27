import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { useContext } from "react";

import { Context } from "../store/appContext"; 

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	console.log(store.favorites);
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} alt="Logo" width="120" height="80" className="d-inline-block align-text-top ms-2"/>
				</Link>
				<div className="navbar-end" id="navbarSupportedContent">
					<div className="dropdown">
						<button className="dropdown-toggle boton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-sm-end">
						{store.favorites.map( 
							(item,index)=> 
								<li className="dropdown-item element" key={index}>
									<a>{item}</a>
									<i className="icon fas fa-trash float-end" 
										onClick={() => actions.removeOfFavorites(index)}></i>
								</li>)}
						</ul>
					</div>
				</div>
			</div>
			</nav>
	);
};
