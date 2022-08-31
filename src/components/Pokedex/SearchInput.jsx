import React from 'react';
import './SearchInput.css';

const SearchInput = ({ setPokeSearch, setPokeType }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setPokeSearch(e.target.searchText.value.trim().toLowerCase());
		setPokeType('All');
		e.target.searchText.value = '';
	};

	return (
		<div className="pokedex__form">
			<form onSubmit={handleSubmit}>
				<input type="text" id="searchText" placeholder="Search a pokemon" />
				<button>Search</button>
			</form>
		</div>
	);
};

export default SearchInput;
