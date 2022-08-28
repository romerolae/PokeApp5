import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './Pokedex/PokemonCard';
import './Pokedex.css';
const Pokedex = () => {
	const [pokemons, setPokemons] = useState();

	useEffect(() => {
		const URL = 'https://pokeapi.co/api/v2/pokemon';
		axios
			.get(URL)
			.then((res) => setPokemons(res.data))
			.catch((err) => console.log(err));
	}, []);

	// console.log(pokemons);

	return (
		<div className="pokedex">
			<div className="pokeImage">
				<img src="/image 12.png" alt="" />
			</div>

			<div className="pokedex__baner">
				<div className="pokedex__red"></div>
				<div className="pokedex__black"></div>
			</div>
			<div className="cards-container">
				{pokemons?.results.map((pokemon) => (
					<PokemonCard key={pokemon.url} url={pokemon.url} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;
