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
			<div className="circle__ext1">
				<div className="circle__int1"></div>
			</div>
			<h2>Welcome, here you will find your favorite pokemon</h2>
			<div className="form__main">
				<div className="pokedex__form">
					<form>
						<input type="text" placeholder="Search a pokemon" />
						<button>Search</button>
					</form>
				</div>
				<div className="pokedex__form2">
					<form id="">
						<select name="" id="">
							<option value="">
								<button>All Pokemons</button>
							</option>
							<option value="">Fighter</option>
						</select>
					</form>
				</div>
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
