import React from 'react';
import Result from './Result';
import { Card } from 'semantic-ui-react'

const ResultsContainer = props => {
	const { results, seeRecipe, saveRecipe, unSaveRecipe, savedRecipes, currentUser } = props;

	const showResults = results =>
		results.map(result => {
			return <Result
				currentUser={currentUser}
				result={result}
				key={result.id}
				seeRecipe={seeRecipe}
				saveRecipe={saveRecipe}
				unSaveRecipe={unSaveRecipe}
				savedRecipes={savedRecipes}
			/>;
		});

	return (
		<div>
			<Card.Group>{showResults(results)}</Card.Group>
		</div>
	);
};

export default ResultsContainer;
