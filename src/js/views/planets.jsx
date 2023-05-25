import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../img/logo.png"

export const Planets = () => {

    const [planetsData,setPlanetsData] = useState({})
    const params = useParams()

	function getPlanetsInfo(){
		fetch("https://www.swapi.tech/api/planets/" + params.theid , {
			method: "GET"})
		.then((res) => res.json())
		.then((data) => setPlanetsData(data.result.properties))
	}

	useEffect(() => {
		getPlanetsInfo()
	},[])

	return(
    <>
        <div className="container-fluid">
            <div className="row">
                <img className="col" src={"https://starwars-visualguide.com/assets/img/planets/"+params.theid+".jpg"} alt="" style={{width:450, height:400}}/>
                <div className="col text-center">
                    <h1 className="title">{planetsData.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui blanditiis ipsa vero illo quod, saepe inventore ut iure porro suscipit, nam quasi explicabo cumque illum similique, ratione tempora! Voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, explicabo dolore quidem in tempore corrupti autem, consectetur iure ipsa at laborum minus doloremque quibusdam expedita, id necessitatibus doloribus quisquam error.</p>
                </div>
            </div>
            <hr/>
            <div className="row text-center box">
                <div className="col">
                    <h2>Name</h2>
                    <p>{planetsData.name}</p>
                </div>
                <div className="col">
                    <h2>Climate</h2>
                    <p>{planetsData.climate}</p>
                </div>
                <div className="col">
                    <h2>Population</h2>
                    <p>{planetsData.population}</p>
                </div>
                <div className="col">
                    <h2>Orbital Period</h2>
                    <p>{planetsData.orbital_period}</p>
                </div>
                <div className="col">
                    <h2>Rotation Period</h2>
                    <p>{planetsData.rotation_period}</p>
                </div>
                <div className="col">
                    <h2>Diameter</h2>
                    <p>{planetsData.diameter}</p>
                </div>
            </div>
        </div>
	</>
);}
