import React from "react";
import logo from "../../img/logo.png"
import Link from 'react-router-dom'

export const Profile = () => (
	<>
    <div className="container-fluid">
		<div className="row">
			<img className="col" src={logo} alt="" style={{width:450, height:400}}/>
            <div className="col text-center">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui blanditiis ipsa vero illo quod, saepe inventore ut iure porro suscipit, nam quasi explicabo cumque illum similique, ratione tempora! Voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, explicabo dolore quidem in tempore corrupti autem, consectetur iure ipsa at laborum minus doloremque quibusdam expedita, id necessitatibus doloribus quisquam error.</p>
            </div>
		</div>
        <hr/>
        <div className="row text-center">
            <div className="col">
                <h2>Name</h2>
                <p>xxx</p>
            </div>
            <div className="col">
                <h2>Climate</h2>
                <p>xxx</p>
            </div>
            <div className="col">
                <h2>Population</h2>
                <p>xxx</p>
            </div>
            <div className="col">
                <h2>Orbital Period</h2>
                <p>xxx</p>
            </div>
            <div className="col">
                <h2>Rotation Period</h2>
                <p>xxx</p>
            </div>
            <div className="col">
                <h2>Diameter</h2>
                <p>xxx</p>
            </div>
        </div>
    </div>
	</>
);
