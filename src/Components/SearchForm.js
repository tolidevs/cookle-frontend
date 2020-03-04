import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Diet from './Diet'
import Allergies from './Allergies'
import CookTime from './CookTime'
import Calories from './Calories'



class SearchForm extends Component {

	state = {
		clicked: null
	}

	handleClick = (e) => {
		e.preventDefault()
		const name = e.target.name
		this.setState({ clicked: name })
		
	}

	renderOptions = () => {
		const { clicked } = this.state
		switch (clicked) {
			default: break
			case ("Allergies"):
				console.log("allergy")
				return < Allergies clearOptionsState={this.clearOptionsState} />
		 	case ("Diet"):
				console.log("diet")
				return < Diet clearOptionsState={this.clearOptionsState} />
			case ("Calories"):
				console.log("calories")
				return < Calories clearOptionsState={this.clearOptionsState} />;
			case ("PrepTime"):
				console.log("prep time")
				return < CookTime clearOptionsState={this.clearOptionsState} />;
		}
	}

	clearOptionsState = () => {
		this.setState({ clicked: null})
	}
	
	render() {
		const { searchFunction } = this.props

		return (
		<Segment className="search-form">
			<Form onSubmit={ e => searchFunction(e)}>
				<Form.Input
					name="searchString"
					label='Search by recipe or ingredients'
					placeholder='eg: eggs benedict'
					type='text'
					required
				/>
				<Form.Group widths={4}>
					<Button
						color="teal"
						name="Diet"
						onClick={this.handleClick}
					>Diet
					</Button>
					<Button
						color="teal"
						name="Allergies"
						onClick={this.handleClick}
					>Allergies
					</Button>
					<Button
						color="teal"
						name="Calories"
						onClick={this.handleClick}
					>Calories
					</Button>
					<Button
						color="teal"
						name="PrepTime"
						onClick={this.handleClick}
					>Prep Time
					</Button>
					</Form.Group>
					<div>
						{this.renderOptions()}
					</div>
				<Form.Button type='submit'>Search</Form.Button>
			</Form>
		</Segment>
	);
	}
};

export default SearchForm;
