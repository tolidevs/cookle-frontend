import React from 'react';

const Result = props => {
	const { result, seeRecipe } = props;

	return (
		<div onClick={() => seeRecipe(result.id)}>
			<div>{result.id}</div>
			<img src={result.image} />
			<div>{result.title}</div>
		</div>
	);
};

export default Result;
