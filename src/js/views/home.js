import React from "react";
import "../../styles/home.css";
import {Card} from "./peopleCards.jsx"
import { PlanetsCard } from "./planetsCards.jsx";
import { useState, useEffect } from "react";

export const Home = () =>{

	const [peopleData,setPeopleData] = useState([])
	const [planetsData,setPlanetsData] = useState([])

	function getInfo(){
		fetch("https://swapi.dev/api/people/", {
			method: "GET"})
		.then((res) => res.json())
		.then((data) => setPeopleData(data.results))

		fetch("https://swapi.dev/api/planets/", {
			method: "GET"})
		.then((res) => res.json())
		.then((data) => setPlanetsData(data.results))
	}

	useEffect(() => {
		getInfo()
	},[])

	return(
	<>
		<div className="my-3">
			<h1 className="my-3 mx-2">Characters</h1>
			<div className="d-flex carrusel">
				{peopleData.map( (people,index)=> <Card uid={index+1} key = {index+1} name = {people.name} gender = {people.gender} hair_color = {people.hair_color} eye_color = {people.eye_color}/> )}
			</div>
		</div>
		<div className="my-4">
			<h1 className="my-4 mx-2">Planets</h1>
			<div className="d-flex carrusel">
				{planetsData.map( (planets,index)=> <PlanetsCard uid={index+1} key = {index+1} name = {planets.name} population = {planets.population} terrain = {planets.terrain}/> )}
			</div>
		</div>
	</>
	);
}
