import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Diet from './Diet'
import Allergies from './Allergies'
import CookTime from './CookTime'
import Calories from './Calories'



class SearchForm extends Component {
	
	state = {
		clicked: null,
		allergies: null,
		diet: null,
		calories: 0,
		cookTime: 0
	};

	handleClick = e => {
		e.preventDefault();
		const name = e.target.name;
		this.setState({ clicked: name });
	};

	clearOptionsState = () => {
		this.setState({ clicked: null });
	};

	addAllergiesToState = array => {
		this.setState({ allergies: array });
	};

	addDietToState = array => {
		this.setState({ diet: array });
	};

	addCaloriesToState = calories => {
		this.setState({ calories });
	};

	addCookTimeToState = cookTime => {
		this.setState({ cookTime: cookTime * 60 });
	};

	renderOptions = () => {
		const { clicked, allergies, diet, calories, cookTime } = this.state;
		switch (clicked) {
		default:
			break;
		case "Allergies":
			return (
			<Allergies
				allergies={allergies}
				addAllergiesToState={this.addAllergiesToState}
				clearOptionsState={this.clearOptionsState}
			/>
			);
		case "Diet":
			return (
			<Diet
				diet={diet}
				addDietToState={this.addDietToState}
				clearOptionsState={this.clearOptionsState}
			/>
			);
		case "Calories":
			return (
			<Calories
				calories={calories}
				addCaloriesToState={this.addCaloriesToState}
				clearOptionsState={this.clearOptionsState}
			/>
			);
		case "PrepTime":
			return (
			<CookTime
				cookTime={parseFloat(cookTime / 60)}
				addCookTimeToState={this.addCookTimeToState}
				clearOptionsState={this.clearOptionsState}
			/>
			);
		}
	};
		
		
	render() {
		const { searchFunction } = this.props;

		return (
		<Segment className="search-form">
			<Form onSubmit={e => searchFunction(e)}>
			<Form.Input
				name="searchString"
				label="Search by recipe or ingredients"
				placeholder="eg: eggs benedict"
				type="text"
				required
			/>
			<Form.Group widths={4}>
				<Button color="teal" name="Diet" onClick={this.handleClick}>
				Diet
				</Button>
				<Button color="teal" name="Allergies" onClick={this.handleClick}>
				Allergies
				</Button>
				<Button color="teal" name="Calories" onClick={this.handleClick}>
				Calories
				</Button>
				<Button color="teal" name="PrepTime" onClick={this.handleClick}>
				Prep Time
				</Button>
			</Form.Group>
			<div>{this.renderOptions()}</div>
			<Form.Button type="submit">Search</Form.Button>
			</Form>
		</Segment>
		);
	}
	};

export default SearchForm;
