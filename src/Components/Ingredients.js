import React from 'react';

const Ingredients = props => {
	const { ingredients } = props;
	return (
		<ul>
			{ingredients.map((ingredient, i) => (
				<li key={i}>{ingredient.original}</li>
			))}
		</ul>
	);
};

export default Ingredients;
