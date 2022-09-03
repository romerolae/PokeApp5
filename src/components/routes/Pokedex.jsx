import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* 4 Import */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/* Component */
import Pagination from '../pagination/Pagination';
// import PokemonItem from './Pokedex/PokemonItem';
import './styles/Pokedex.css';
import PokemonCard from '../Pokedex/PokemonCard';
import Header from '../shared/Header';

const Pokedex = () => {
	/* https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20  */

	/*  Navigate */
	const navigate = useNavigate();

	/* User Name */
	const nameTrainer = useSelector((state) => state.nameTrainer);
	/*  setNumItem */
	const setNumItem = useSelector((state) => state.setNumItem);

	/*  Load Pokemon  */
	/* Var Change pokemon */
	const [pokemons, setPokemons] = useState([]);
	const [pokemonsType, setPokemonsType] = useState([]);

	/* Number Total of Pokemoon and Type */
	const [totalItem, setTotalItem] = useState(0);
	const [selectType, setSelectType] = useState([]);
	const [typeFilter, setTypeFilter] = useState('');

	/* Offset load pokemoon */
	const [offSet, setOffSet] = useState(0);
	const [pageActual, setPageActual] = useState(1);

	/* Search */
	const [search, setSearch] = useState('');

	/* Change Page - Pagination */

	/* Parametros  */
	const { page } = useParams();

	/* const btnSearch =(search)=>{
             alert(search)
     } */

	const changePage = (page) => {
		// alert(page)
		setOffSet(setNumItem * (page - 1));
		setPageActual(page);
		// window.scrollTo(0, 0);
	};

	/* Select Type - Filter for type */
	const fomrSelectType = (data) => {
		//alert(data.target.value)
		if (data.target.value !== typeFilter) {
			setTypeFilter(data.target.value);
			setPageActual(1);
		}
	};

	/* Load  Total Number of Pokemon */
	useEffect(() => {
		/* Listado de Pokemont paginar  */

		/* Type filter for pokemont  */
		if (typeFilter == '') {
			axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
				setTotalItem(res.data.count);
				console.log('----  Pokemons 42 - setTotalItem  -----');
				console.log(res.data);
			});
		} else {
			axios.get(`https://pokeapi.co/api/v2/type/${typeFilter}/`).then((res) => {
				setTotalItem(res.data.pokemon.length);
				console.log('----  Pokemons 62 - setTotalItem  -----');
				console.log(res.data.pokemon.length);
			});
		}

		/* Listado de Pokemont Type for filter   */
		axios
			.get(
				`https://pokeapi.co/api/v2/type/
        `
			)
			.then((res) => {
				setSelectType(res.data.results);
				console.log('----  Pokemons 50 - setTotalItem  -----');
				console.log(res.data.results);
			});
	}, [typeFilter]);

	/* List Url Pokemont  */
	useEffect(() => {
		/* Listado de Pokemont paginar  */

		/* Selector for type */
		if (typeFilter == '') {
			axios
				.get(
					`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${setNumItem}`
				) // ${ramdom}
				.then((res) => {
					setPokemons(res.data.results);
					console.log('----  Pokemons 77 - setPokemons -----');
					console.log(res.data.results);
				});
		} else {
			axios
				.get(`https://pokeapi.co/api/v2/type/${typeFilter}/`) // ${ramdom}
				.then((res) => {
					setPokemonsType(res.data.pokemon);
					console.log('----  Pokemons 84 - TYPE setPokemons -----');
					console.log(res.data.pokemon);
				});
		}
	}, [offSet, typeFilter]);

	/* New array Pokemon Type data for paginate  */
	const newPokemonType = pokemonsType.slice(
		setNumItem * (pageActual - 1),
		setNumItem * (pageActual - 1) + setNumItem
	);

	document.body.style.backgroundColor = '#fff';
	console.log('----  Pokemons 112 -----');
	console.log(newPokemonType);

	return (
		<div className="pokedex">
			<>
				<Header />
				{/* <Link to={`/setting`}>
					<div className="div-setting">
						<p>Setting</p>
						<div className="link_setting"></div>
					</div>
				</Link> */}

				<h2>
					Welcome {nameTrainer.toUpperCase()} , here you can find your favorite
					pokemon
				</h2>
				<div className="form__main">
					<div className="pokedex__form">
						<input
							type="text"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
							className="input-form"
							placeholder="Name Pokemon"
						/>
						<button
							className="btn-form"
							onClick={() => navigate(`/pokedex/${search}`)}
						>
							Search
						</button>
					</div>
					<div className="pokedex__form2">
						<select
							name="type"
							id="type"
							onClick={fomrSelectType}
							className={'select-type'}
						>
							<option value="">All pokemons</option>
							{selectType.map((typeData) => (
								<option
									value={typeData.name}
									key={typeData.name}
									selected={typeData.name === typeFilter ? true : false}
								>
									{typeData.name[0].toUpperCase() + typeData.name.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>

				<div>
					<Pagination
						totalItem={totalItem}
						actualPage={pageActual}
						changePage={changePage}
					/>
				</div>
			</>
			<div className="cards-container ">
				{typeFilter == ''
					? pokemons.map((pokemon) => (
							<PokemonCard pokemonUrl={pokemon.url} key={pokemon.url} />
					  ))
					: newPokemonType.map((pokemon) => (
							<PokemonCard
								pokemonUrl={pokemon.pokemon?.url}
								key={pokemon.pokemon?.url}
							/>
					  ))}
			</div>

			<div>
				<Pagination
					totalItem={totalItem}
					actualPage={pageActual}
					changePage={changePage}
				/>
			</div>
		</div>
	);
};

export default Pokedex;
