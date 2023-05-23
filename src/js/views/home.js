import React from "react";
import "../../styles/home.css";
import {Card} from "../../js/views/cards.jsx"

export const Home = () => (
	<>
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
