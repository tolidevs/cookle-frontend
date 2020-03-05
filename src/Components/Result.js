import React from 'react';

const Result = props => {
	const { result, seeRecipe } = props;

	return (
		<div
			onClick={() => seeRecipe(result.id)}
			className={'result'}
			style={{ backgroundImage: `url(${result.image})` }}>
			<div>{result.id}</div>
			<div>{result.title}</div>
		</div>
	);
};

export default Result;