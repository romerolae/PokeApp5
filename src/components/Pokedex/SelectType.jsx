import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SelectType = ({ setPokeType }) => {
	const [listTypes, setListTypes] = useState();

	useEffect(() => {
		const URL = 'http://pokeapi.co/api/v2/type';
		axios
			.get(URL)
			.then((res) => setListTypes(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	const handleChange = (e) => {
		e.preventDefault();
		setPokeType(e.target(value));
	};

	return (
		<div className="pokedex__form2">
			<select onChange={handleChange}>
				<option value="all">All Pokemons</option>
				{listTypes?.map((type) => (
					<option key={type.name} value={type.name}>
						{type.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectType;
