import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import SaveIcon from '../SaveIcon'

const Result = ({ result, seeRecipe, saveRecipe, unSaveRecipe, savedRecipes, currentUser }) => {
	const save = (
		<>
			<SaveIcon
				recipe={result}
				savedRecipes={savedRecipes}
				saveRecipe={saveRecipe}
				unSaveRecipe={unSaveRecipe}
			/>
		</>
	)

	return(
		<Card className='result'
			onClick={() => seeRecipe(result.id)}
			image={result.image}
			header={result.title}
			extra={currentUser && save}
		/>
		// 	<Card.Content 
		// 	}}>
		// 		<Image src={result.image} wrapped />
		// 		<Card.Header className='result' ui={true}>{result.title}</Card.Header>
		// 	</Card.Content>
		// 	{currentUser && (
		// 		<Card.Content extra>
		// 			{save}
		// 		</Card.Content>)
		// 	}
			
		
		// </Card>
	)
}

export default Result;
