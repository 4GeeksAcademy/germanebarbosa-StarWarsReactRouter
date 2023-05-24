import React from "react";
import { useState, useEffect } from "react";
import logo from "../../img/logo.png"

export const People = () => {

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

	return(
    <>
        <div className="container-fluid">
            <div className="row">
                <img className="col" src={logo} alt="" style={{width:450, height:400}}/>
                <div className="col text-center">
                    <h1>{peopleData.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui blanditiis ipsa vero illo quod, saepe inventore ut iure porro suscipit, nam quasi explicabo cumque illum similique, ratione tempora! Voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, explicabo dolore quidem in tempore corrupti autem, consectetur iure ipsa at laborum minus doloremque quibusdam expedita, id necessitatibus doloribus quisquam error.</p>
                </div>
            </div>
            <hr/>
            <div className="row text-center">
                <div className="col">
                    <h2>Name</h2>
                    <p>{peopleData.name}</p>
                </div>
                <div className="col">
                    <h2>Birth Year</h2>
                    <p>{peopleData.birth_year}</p>
                </div>
                <div className="col">
                    <h2>Gender</h2>
                    <p>{peopleData.gender}</p>
                </div>
                <div className="col">
                    <h2>Height</h2>
                    <p>{peopleData.height}</p>
                </div>
                <div className="col">
                    <h2>Skin Color</h2>
                    <p>{peopleData.skin_color}</p>
                </div>
                <div className="col">
                    <h2>Eye Color</h2>
                    <p>{peopleData.eye_color}</p>
                </div>
            </div>
        </div>
	</>
);}
