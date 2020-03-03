import React from 'react';
import Result from './Result';

const ResultsContainer = props => {
	const { results } = props;

	const showResults = results =>
		results.map(result => {
			return <Result result={result} key={result.id} />;
		});

	return (
		<div>
			<div>{showResults(results)}</div>
		</div>
	);
};

export default ResultsContainer;
