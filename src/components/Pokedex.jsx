import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './Pokedex/PokemonCard';
import './Pokedex.css';
import { useSelector } from 'react-redux';
import SearchInput from './Pokedex/SearchInput';
import SelectType from './Pokedex/SelectType';
import Paginate from './Pokedex/Paginate';

const Pokedex = () => {
	const [pokemons, setPokemons] = useState();

	const [pokeSearch, setPokeSearch] = useState();
	const [pokeType, setPokeType] = useState('All');

	useEffect(() => {
		if (pokeType !== 'All') {
			//Aqui se hace la logica cuando el usuario busca por el input
			const URL = `https://pokeapi.co/api/v2/type/${pokeType}/`;
			axios
				.get(URL)
				.then((res) => {
					const arr = res.data.pokemon.map((e) => e.pokemon);
					setPokemons({ results: arr });
				})
				.catch((err) => console.log(err));
		} else if (pokeSearch) {
			//Cuando el usuario filtra por tipo
			const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
			const obj = {
				results: [{ url }],
			};
			setPokemons(obj);
		} else {
			//Cuando quiere todos los pokemones
			const URL = 'https://pokeapi.co/api/v2/pokemon';
			axios
				.get(URL)
				.then((res) => setPokemons(res.data))
				.catch((err) => console.log(err));
		}
	}, [pokeSearch, pokeType]);

	const nameTrainer = useSelector((state) => state.nameTrainer);

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
			<h2>Welcome {nameTrainer}, here you will find your favorite pokemon</h2>
			<div className="form__main">
				<SearchInput setPokeSearch={setPokeSearch} setPokeType={setPokeType} />
				<SelectType setPokeType={setPokeType} pokeType={pokeType} />
			</div>

			<div className="cards-container">
				{pokemons?.results.map((pokemon) => (
					<PokemonCard key={pokemon.url} url={pokemon.url} />
				))}
			</div>
			{/* <Paginate /> */}
		</div>
	);
};

export default Pokedex;
