import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PokemonDetails = () => {
	const [pokeInfo, setPokeInfo] = useState();

	const { name } = useParams();

	useEffect(() => {
		const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
		axios
			.get(URL)
			.then((res) => setPokeInfo(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<article>
			<img
				src={pokeInfo?.sprites.other['official-artwork'].front_default}
				alt=""
			/>
			<h1>{name}</h1>
		</article>
	);
};

export default PokemonDetails;

//useParams para capturar la informacion
