/*  Import Router */

import { Route, Routes } from 'react-router-dom';

/* Protected Routes*/
import ProtectedRoutes from './components/routes/ProtectedRoutes';

/* Import Componet  */

import Home from './components/routes/Home';
import Pokedex from './components/routes/Pokedex';
import PokemonDetails from './components/routes/PokemonDetails';

/* Styles*/

import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />

				<Route element={<ProtectedRoutes />}>
					<Route path="/pokedex" element={<Pokedex />} />
					<Route path="/pokedex/:name" element={<PokemonDetails />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
