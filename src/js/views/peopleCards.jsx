import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import { FaHeart } from "react-icons/fa"
import logo from "../../img/logo.png"
import "../../styles/home.css";

export const Card = (props) => {
	
	return (
		<>
			<div className="card mx-2" style={{width: 400}}>
				<img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title title"> {props.name} </h5>
					<p className="card-text">
						Gender: {props.gender} <br/>
						Hair Color: {props.hair_color} <br/>
						Eye Color: {props.eye_color}<br/>
						</p>
					<Link to={"/people/"+props.uid} className="btn boton">Learn more</Link>
					<Link to="/" className="btn float-end likeContainer"><FaHeart className="like"/></Link>
				</div>
			</div>
		</>
	);
};
