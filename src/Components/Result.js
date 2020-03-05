import React from 'react';

const Result = props => {
	const { result, seeRecipe, setPage } = props;

	return (
		<div
			onClick={() => {
				seeRecipe(result.id)
				setPage("show")
			}}
			className={'result'}
			style={{ backgroundImage: `url(${result.image})` }}>
			<div>{result.id}</div>
			<div>{result.title}</div>
		</div>
	);
};

export default Result;
