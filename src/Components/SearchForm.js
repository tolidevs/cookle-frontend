import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const SearchForm = props => {
	const { loginFunction, signUpFunction, displayLogin, loginShown } = props;
	return (
		
			<Segment className="search-form">
				<Form>
					<Form.Group widths={1}>
						<Form.Input
							label='Search by recipe or ingredients'
							placeholder='eg: eggs benedict'
							type='text'
							required
						/>
					</Form.Group>
					
					<Form.Group widths={3}>
						<Button
							secondary
							// onClick={e =>
							// 	loginFunction(
							// 		e.target.parentElement[0].value,
							// 		e.target.parentElement[1].value
							// 	)
							// }>
							>Dietary Requirements
						</Button>
						<Button
							secondary
							// onClick={e =>
							// 	signUpFunction(
							// 		e.target.parentElement[0].value,
							// 		e.target.parentElement[1].value
							// 	)
							// }>
							>Calories
						</Button>
						<Button
							secondary
							// onClick={e =>
							// 	signUpFunction(
							// 		e.target.parentElement[0].value,
							// 		e.target.parentElement[1].value
							// 	)
							// }>
							>Prep Time
						</Button>
				</Form.Group>
				<Button
					type='submit'
					// onClick={e =>
					// 	signUpFunction(
					// 		e.target.parentElement[0].value,
					// 		e.target.parentElement[1].value
					// 	)
					// }>
				>Search</Button>
				</Form>
			</Segment>
	);
};

export default SearchForm;
