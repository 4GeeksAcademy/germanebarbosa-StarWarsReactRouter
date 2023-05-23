import React from "react";
import logo from "../../img/logo.png"
import {Link} from 'react-router-dom'

export const Card = () => (
	<>
		<div className="card mx-2" style={{width: 400}}>
			<img src={logo} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<Link to="/perfil" className="btn btn-primary">Go somewhere</Link>
				<a to="/" className="btn btn-primary float-end">Favorite</a>
			</div>
		</div>
	</>
);
