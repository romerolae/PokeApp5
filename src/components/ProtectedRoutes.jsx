import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
	const nameTrainer = useSelector((state) => state.nameTrainer);

	if (nameTrainer) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};

export default ProtectedRoutes;

//En store se guarda el estado en global
//El index.js
//useSelector(hook) nos sirve para acceder a la info de la store   debe retornar especificamente el estado que necesita

//useNavigate
