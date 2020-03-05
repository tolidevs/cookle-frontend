import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';

class Home extends React.Component {
	state = {
		loginShown: false,
		currentUser: null,
		userMenuShown: false,
		results: []
	};

	componentDidMount() {}

	displayUserMenu = () => {
		this.setState({
			userMenuShown: !this.state.userMenuShown
		});
	};

	displayLogin = () => {
		this.setState({
			loginShown: !this.state.loginShown
		});
	};

	setUser = data => {
		if (data.message) {
			console.log(data.message);
		} else {
			this.setState({
				currentUser: data.id
			});
		}
	};

	loginFunction = (e, email, password, button) => {
		// e.preventDefault();
		const data = { email, password };
		// this.setUser(data)

		fetch(`http://localhost:3000/${button.name}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(this.setUser)
			.catch(console.log);
		e.target.reset();
	};

	searchFunction = (e, allergies, diet, calories, cookTime) => {
		e.preventDefault();

		const searchString = e.target.searchString.value;
		const searchParams = {
			search_string: searchString,
			diet: diet,
			allergies: allergies,
			calories: calories,
			cook_time: cookTime
		};
		console.log(searchParams);
		fetch('http://localhost:3000/search-recipes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json'
			},
			body: JSON.stringify(searchParams)
		})
			.then(res => res.json())
			.then(this.renderResults)
			.catch(console.log);
		// this.renderResults(searchData);

		e.target.reset();
	};

	renderResults = data => {
		// console.log(data.results);
		this.setState({
			results: data.results
		});
	};

	seeRecipe = id => {
		const data = { id };
		console.log(data, id);

		fetch('http://localhost:3000/get-recipe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => this.props.showPage(data))
			.catch(console.log);
		// this.props.showPage(showData);
	};

	render() {
		return (
			<Container className='main'>
				<nav>
					<UserMenu
						displayUserMenu={this.displayUserMenu}
						userMenuShown={this.state.userMenuShown}
					/>
					<LoginButton
						displayLogin={this.displayLogin}
						currentUser={this.state.currentUser}
						displayUserMenu={this.displayUserMenu}
					/>
				</nav>

				<LoginForm
					id='loginForm'
					loginFunction={this.loginFunction}
					displayLogin={this.displayLogin}
					loginShown={this.state.loginShown}
				/>

				<Header as='h1'>COOKLE</Header>
				<Header.Subheader>The Recipe App</Header.Subheader>

				<SearchForm searchFunction={this.searchFunction} />
				<ResultsContainer
					results={this.state.results}
					seeRecipe={this.seeRecipe}
				/>
			</Container>
		);
	}
}
export default Home;
