import React from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Segment } from 'semantic-ui-react';

const ShowData = props => {
	const { recipe } = props;
	return (
		<div>
			<Segment>
				<div id='recipeDiv'>
					<h1 id='foodTitle'>{recipe.title}</h1>
					<img id='foodImage' src={recipe.image} alt={'Food'} />
					<div id='details'>
						<ul>
							{recipe.vegetarian ? <li>Vegetarian</li> : ''}
							{recipe.vegan ? <li>Vegan</li> : ''}
							{recipe.glutenFree ? <li>Gluton Free</li> : ''}
							{recipe.dairyFree ? <li>Dairy Free</li> : ''}
							<li>Cooking Time: {recipe.readyInMinutes}mins</li>
							<li>Servings: {recipe.servings} people</li>
						</ul>
					</div>
				</div>
			</Segment>
			<div id='lists'>
				<div id='ingredients'>
					<Segment>
						<Ingredients ingredients={recipe.extendedIngredients} />
					</Segment>
				</div>
				<div id='instructions'>
					<Segment>
						<Instructions instructions={recipe.analyzedInstructions[0].steps} />
					</Segment>
				</div>
			</div>
		</div>
	);
};

export default ShowData;
