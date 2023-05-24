import React from "react";
import "../../styles/home.css";
import {Card} from "../../js/views/cards.jsx"


export const Home = () =>{
	function getInfo(){
		fetch("https://www.swapi.tech/api/people/1")
		.then(res => res.json())
		.then(data => console.log(data))
	} 
	return(
	<>
	{getInfo()}
		<div className="my-3">
			<h1 className="my-3 mx-2">Characters</h1>
			<div className="d-flex carrusel">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
		<div className="my-4">
			<h1 className="my-4 mx-2">Planets</h1>
			<div className="d-flex carrusel">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	</>
	);
}
