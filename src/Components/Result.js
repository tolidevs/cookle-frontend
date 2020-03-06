import React from 'react';

const Result = props => {
	const { result, seeRecipe } = props;

	return (
		<div
			onClick={() => {
				seeRecipe(result.id)
			}}
			className={'result'}
			style={{ backgroundImage: `url(${result.image})` }}>
			<h3 className='resultText'>{result.title}</h3>
		</div>
	);
};

export default Result;
