import React from "react";
import "../../styles/home.css";
import { Card } from "./peopleCards.jsx"
import { PlanetsCard } from "./planetsCards.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext"; 

export const Home = () =>{

	const { store } = useContext(Context);

	return(
	<>
		<div className="my-3">
			<h1 className="my-3 mx-2">Characters</h1>
			<div className="d-flex carrusel">
				{store.people.map( (people,index)=> <Card uid={index+1} key = {index+1} name = {people.name} gender = {people.gender} hair_color = {people.hair_color} eye_color = {people.eye_color}/> )}
			</div>
		</div>
		<div className="my-4">
			<h1 className="my-4 mx-2">Planets</h1>
			<div className="d-flex carrusel">
				{store.planets.map( (planets,index)=> <PlanetsCard uid={index+1} key = {index+1} name = {planets.name} population = {planets.population} terrain = {planets.terrain}/> )}
			</div>
		</div>
	</>
	);
}
