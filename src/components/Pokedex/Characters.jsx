import React from 'react';

const Characters = ({ characters, loading }) => {
	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<ul className="list__group">
			{characters.results?.map((character) => (
				<li key={character.name} className="list__group__item">
					{character.url}
				</li>
			))}
		</ul>
	);
};

export default Characters;
