import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Characters from './Characters';
import Pagination from './PaginationAnother';

const Paginate = ({ pokeSearch }) => {
	const [characters, setCharacters] = useState();
	// const [loading, setloading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage, setCharactersPerPage] = useState(10);

	const getAllCharacters = () => {
		const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
		axios
			.get(URL)
			.then((res) => setCharacters(res.data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getAllCharacters();
	}, []);

	let arrayPokemons = [];
	const pokemonsPerpage = charactersPerPage;
	if (characters?.results.length < pokemonsPerpage) {
		arrayPokemons = [...characters?.results];
	} else {
		const lastPokemon = currentPage * pokemonsPerpage;
		arrayPokemons = characters?.results.slice(
			lastPokemon - pokemonsPerpage,
			lastPokemon
		);
	}

	let arrayPages = [];
	let quantityPages = Math.ceil(characters?.results.length / charactersPerPage);
	const pagesPerBlock = 5;

	let currentBlock = Math.ceil(currentPage / pagesPerBlock);

	if (currentBlock * pagesPerBlock >= quantityPages) {
		for (
			let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
			i <= quantityPages;
			i++
		) {
			arrayPages.push(i);
		}
	} else {
		for (
			let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
			i <= currentBlock * pagesPerBlock;
			i++
		) {
			arrayPages.push(i);
		}
	}

	// console.log(arrayPages);

	return (
		<Pagination
			arrayPages={arrayPages}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			quantityPages={quantityPages}
		/>
	);
};

export default Paginate;
