import React from 'react';
import './Pagination.css';

const Pagination = ({
	arrayPages,
	currentPage,
	setCurrentPage,
	quantityPages,
}) => {
	const previousPage = () => {
		if (currentPage - 1 === 0) {
			setCurrentPage(quantityPages);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage + 1 > quantityPages) {
			setCurrentPage(1);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};

	const changePageTo = (n) => setCurrentPage(n);

	return (
		<div className="pagination-container">
			<div onClick={previousPage} className="pagination__prev__next">
				&#60;
			</div>
			<ul className="pagination__number__container">
				{arrayPages?.map((number) => (
					<li onClick={() => changePageTo(number)} key={number}>
						{number}
					</li>
				))}
			</ul>
			<div onClick={nextPage} className="pagination__prev__next">
				&#62;
			</div>
		</div>
	);
};

export default Pagination;
