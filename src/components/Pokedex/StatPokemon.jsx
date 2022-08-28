import React from 'react';
import './StatPokemon.css';

const StatPokemon = ({ infoStat }) => {
	return (
		<div className="stat__card">
			<li className=" stat__item">
				<h4>{infoStat.stat.name}</h4>
				<p>{infoStat.base_stat}</p>
			</li>
		</div>
	);
};

export default StatPokemon;
