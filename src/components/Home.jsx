import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';

const Home = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const inputValue = e.target.name.value.trim();

		if (inputValue.length !== 0) {
			dispatch(setNameTrainer(inputValue));
			navigate('/pokedex');
		}
		e.target.name.value = '';
	};

	return (
		<div className="page-home">
			<div className="home__image">
				<img src="/image 11.png" alt="" />
			</div>
			<div className="home__title">
				<h1>Hi Trainer</h1>
				<p>To start, give me your trainer name</p>
			</div>
			<div className="home__input">
				<form onSubmit={handleSubmit}>
					<input type="text" name="" id="name" placeholder="Enter your name" />
					<button>Catch them all</button>
				</form>
			</div>
			<div className="circle__ext">
				<div className="circle__int"></div>
			</div>
			<div className="home__footer">
				<div className="home__red"></div>
				<div className="home__black"></div>
			</div>
		</div>
	);
};

export default Home;

//useDispatch nos sirve para usar una instancia (genero una instancia) para ejecutar una action

//useNavigate

//action.payload se encarga de guardar el dato
