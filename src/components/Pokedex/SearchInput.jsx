import React from 'react';
import './SearchInput.css';

const SearchInput = ({ setPokeSearch }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setPokeSearch(e.target.searchText.value.trim().toLowerCase());
	};

	return (
		<div className="form__main">
			<div className="pokedex__form">
				<form onSubmit={handleSubmit}>
					<input type="text" id="searchText" placeholder="Search a pokemon" />
					<button>Search</button>
				</form>
			</div>
		</div>
	);
};

export default SearchInput;
