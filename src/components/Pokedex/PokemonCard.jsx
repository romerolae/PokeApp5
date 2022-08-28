import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatPokemon from './StatPokemon';
import './PokemonCard.css';
const PokemonCard = ({ url }) => {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setPokemon(res.data))
			.catch((err) => console.log(err));
	}, []);

	console.log(pokemon);

	return (
		<div className="pokemonCard">
			<article className=" poke__card">
				<header>
					<img
						src={pokemon?.sprites.other['official-artwork']['front_default']}
						alt=""
					/>
				</header>
				<section className="poke__body">
					<h3>{pokemon?.name}</h3>
					<ul>
						{pokemon?.types.map((slot) => (
							<li key={slot.type.url}> {slot.type.name}</li>
						))}
					</ul>
				</section>
				<div className="card__footer">
					<ul className="card__prop">
						{pokemon?.stats.map((stat) => (
							<StatPokemon key={stat.stat.url} infoStat={stat} />
						))}
					</ul>
				</div>
			</article>
		</div>
	);
};

export default PokemonCard;
