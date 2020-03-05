import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Sidebar, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
import searchData from '../DevelopmentData/search.json';
import showData from '../DevelopmentData/show.json';
import LogOutForm from '../Components/LogOutForm'

class Home extends React.Component {
	state = {
		loginShown: false,
		currentUser: null,
		userMenuShown: false,
		results: [],
		logOutClicked: false
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
		this.setState({
			currentUser: data.email
		});
	};

	logOutClick = () => {
		this.setState({
			logOutClicked: !this.state.logOutClicked
		})
	}

	logOut = () => {
		this.setState({
			currentUser: null
		})
		this.logOutClick()
	}

	loginFunction = (e, email, password) => {
		e.preventDefault()
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

	searchFunction = (e, allergies, diet, calories, cookTime) => {
		e.preventDefault()
		
		const searchString = e.target.searchString.value;
		const searchParams = {
			search_string: searchString,
			diet: diet,
			allergies: allergies,
			calories: calories,
			cook_time: cookTime
		};
		console.log(searchParams)
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
      <Container className="main">
        <nav>
          <UserMenu
            logOutClick={this.logOutClick}
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
          loginFunction={this.loginFunction}
          signUpFunction={this.signUpFunction}
          displayLogin={this.displayLogin}
          loginShown={this.state.loginShown}
        />
        <LogOutForm
          displayLogin={this.displayLogin}
          logOutClicked={this.state.logOutClicked}
          displayUserMenu={this.displayUserMenu}
        />

        {/* <div className="title-div"> */}
        <Header as="h1" className="title">
          COOKLE
        </Header>
        {/* </div> */}
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
