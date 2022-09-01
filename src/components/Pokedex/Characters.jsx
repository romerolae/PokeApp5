import React from 'react';

const Characters = ({ characters, loading }) => {
	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<ul className="list__group">
			{characters.map((character) => (
				<li key={character.url} className="list__group__item">
					{character.name}
				</li>
			))}
		</ul>
	);
};

export default Characters;
