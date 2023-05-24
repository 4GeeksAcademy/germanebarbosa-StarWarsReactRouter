import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import { FaHeart } from "react-icons/fa"
import logo from "../../img/logo.png"
import "../../styles/home.css";

export const Card = () => {
	
    const [peopleData,setPeopleData] = useState({})

	function getInfo(){
		fetch("https://www.swapi.tech/api/people/1", {
			method: "GET"})
		.then((res) => res.json())
		.then((data) => setPeopleData(data.result.properties))
	}

	useEffect(() => {
		getInfo()
	},[peopleData])
	
	return (
		<>
			<div className="card mx-2" style={{width: 400}}>
				<img src={logo} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title"> {peopleData.name} </h5>
					<p className="card-text">
						Gender: {peopleData.gender} <br/>
						Hair Color: {peopleData.hair_color} <br/>
						Eye Color: {peopleData.eye_color}<br/>
						</p>
					<Link to="/people" className="btn boton">Learn more</Link>
					<Link to="/" className="btn float-end likeContainer"><FaHeart className="like"/></Link>
				</div>
			</div>
		</>
	);
};
