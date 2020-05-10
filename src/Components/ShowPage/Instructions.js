import React from 'react';

const Instructions = props => {
	const { instructions } = props;
	return (
		<ol>
			{instructions.map((step, i) => (
				<li key={i}>{step.step}</li>
			))}
		</ol>
	);
};

export default Instructions;
