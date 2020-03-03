import React from 'react';

const Result = props => {
	const { result } = props;

	return (
		<div>
			<div>{result.id}</div>
			<image src={result.image} />
			<div>{result.title}</div>
		</div>
	);
};

export default Result;
