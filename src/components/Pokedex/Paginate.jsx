import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Characters from './Characters';

const Paginate = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setloading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage, setCharactersPerPage] = useState(20);

	useEffect(() => {
		const fetchCharacters = async () => {
			setloading(true);
			URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
			const res = await axios.get(URL);
			setCharacters(res.data);
			setloading(false);
		};

		fetchCharacters();
	}, []);

	// console.log(characters);

	// Get current character

	// const indexOfLastCharacter = currentPage * charactersPerPage;
	// const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	// const currentCharacters = characters.slice(
	// 	indexOfFirstCharacter,
	// 	indexOfLastCharacter
	// );

	return (
		<div className="container-paginate">
			<Characters characters={characters} loading={loading} />
		</div>
	);
};

export default Paginate;
