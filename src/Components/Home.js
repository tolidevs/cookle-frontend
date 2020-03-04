import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Sidebar, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
import searchData from '../DevelopmentData/search.json';

class Home extends React.Component {
	state = {
		loginShown: false,
		currentUser: null,
		userMenuShown: false,
		results: []
	};

	componentDidMount() {
		console.log(searchData);
	}

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
		this.setState({
			currentUser: data.email
		});
	};

	loginFunction = (email, password) => {
		const data = { email, password };
		// this.setUser(data)

		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(console.log)
			// .then(this.setUser)
			.catch(console.log);
	};

	signUpFunction = (email, password) => {
		const data = { email, password };
		// this.setUser(data)
		fetch('http://localhost:3000/users/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(console.log)
			// .then(this.setUser)
			.catch(console.log);
	};

	searchFunction = e => {
		const searchString = e.target.searchString.value;
		const searchParams = {
			search_string: searchString
		};
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
	};

	renderResults = data => {
		console.log(data.results);
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
	};

	render() {
		return (
			<Container>
				<Sidebar.Pushable as={Segment} className='navbar'>
					{!this.state.userMenuShown ? (
						<LoginForm
							loginFunction={this.loginFunction}
							signUpFunction={this.signUpFunction}
							displayLogin={this.displayLogin}
							loginShown={this.state.loginShown}
						/>
					) : (
						<UserMenu
							displayUserMenu={this.displayUserMenu}
							userMenuShown={this.state.userMenuShown}
						/>
					)}

					<Sidebar.Pusher>
						<Segment>
							<LoginButton
								displayLogin={this.displayLogin}
								currentUser={this.state.currentUser}
								displayUserMenu={this.displayUserMenu}
							/>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>

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
