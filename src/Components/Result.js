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
			<h3 className='resultText'>{result.title}</h3>
		</div>
	);
};

export default Result;
