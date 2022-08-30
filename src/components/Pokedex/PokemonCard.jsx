import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatPokemon from './StatPokemon';
import './PokemonCard.css';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {
	const [pokemon, setPokemon] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setPokemon(res.data))
			.catch((err) => console.log(err));
	}, []);

	const handleClick = () => navigate(`/pokedex/${pokemon.name}`);

	return (
		<div onClick={handleClick} className="pokemonCard">
			<article className=" poke__card">
				<header>
					<img
						src={pokemon?.sprites.other['official-artwork']['front_default']}
						alt=""
					/>
				</header>
				<div className="pokemonCard__bg">
					<section className="poke__body">
						<h3>{pokemon?.name}</h3>
						<ul className="poke__body__item">
							{pokemon?.types.map((slot) => (
								<li key={slot.type.url}> {slot.type.name} </li>
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
				</div>
			</article>
		</div>
	);
};

export default PokemonCard;
