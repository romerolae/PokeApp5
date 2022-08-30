import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './Pokedex/PokemonCard';
import './Pokedex.css';
import { useSelector } from 'react-redux';
import SearchInput from './Pokedex/SearchInput';
import SelectType from './Pokedex/SelectType';
const Pokedex = () => {
	const [pokemons, setPokemons] = useState();

	const [pokeSearch, setPokeSearch] = useState();
	const [pokeType, setPokeType] = useState();

	useEffect(() => {
		let URL;
		if (pokeSearch) {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;

			const obj = {
				results: [
					{
						url,
					},
				],
			};
			setPokemons(obj);
		} else {
			URL = 'https://pokeapi.co/api/v2/pokemon';
		}
		axios
			.get(URL)
			.then((res) => setPokemons(res.data))
			.catch((err) => console.log(err));
	}, [pokeSearch]);

	const nameTrainer = useSelector((state) => state.nameTrainer);

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
			<h2>Welcome {nameTrainer}, here you will find your favorite pokemon</h2>
			<div className="form__main">
				<SearchInput setPokeSearch={setPokeSearch} />
				<SelectType setPokeType={setPokeType} />
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
