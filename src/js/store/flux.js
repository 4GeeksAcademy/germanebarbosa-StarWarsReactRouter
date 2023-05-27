const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			favorites: []
			// peopleInfo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET"})
				.then((res) => res.json())
				.then((data) => setStore({people: data.results}))

				fetch("https://swapi.dev/api/planets/", {
					method: "GET"})
				.then((res) => res.json())
				.then((data) => setStore({planets: data.results}))

				// fetch("https://www.swapi.tech/api/people/" + params.theid , {
				// 	method: "GET"})
				// .then((res) => res.json())
				// .then((data) => setStore({peopleInfo: data.result.properties}))
				// console.log(store.people);
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addToFavorites: (newItem) => {
				console.log('Se agrega a favoritos= ' + newItem)
				const store = getStore() // Trae los valores de Store
				const updatedFavorites = [...store.favorites, newItem]; // Actualiza los valores creando una nueva array agregando el nuevo nombre
				setStore({favorites : updatedFavorites}); // Transforma a Store con la nueva lista.
			},
			removeOfFavorites: (index)=>{
				console.log('Remueve de favoritos');
				const store = getStore()
				const updatedFavorites = (store.favorites.filter(
					(t,currentIndex) => 
						index != currentIndex
						)
					)
				setStore({favorites : updatedFavorites});
			}
		}
	};
};

export default getState;
