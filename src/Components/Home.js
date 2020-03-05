import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';
import SearchForm from './SearchForm';
import ResultsContainer from './ResultsContainer';
import searchData from '../DevelopmentData/search.json';
import showData from '../DevelopmentData/show.json';
import LogOutForm from '../Components/LogOutForm'
import PreferencesContainer from '../Containers/PreferencesContainer'
import Show from "./Show";

class Home extends React.Component {
	state = {
		loginShown: false,
		currentUser: null,
		userMenuShown: false,
		results: [],
		recipe: null,
		logOutClicked: false,
		currentPage: 'home'
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
			.then(results => {
				this.renderResults(
				this.setPage("results")
				)
			}
			)
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

	// showPreferences = () => {
	// 	const { currentUser } = this.state
	// 	this.setState({ preferences: !this.state.preferences})
	// }

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
			.then(recipe => {
				this.setState({ recipe })
				this.setPage("show")
			})
			.catch(console.log);
		// this.props.showPage(showData);
	};

	setPage = (page) => {
		if (this.state.currentPage === page) return;
		this.setState({
			currentPage: page
		})
	}

	// showPage = (recipe) => {
	// 	this.setState({
	// 		recipe
	// 	});
	// }

	renderComponents = () => {
		const { currentPage, results } = this.state
		switch (currentPage) {
			case "home": { return (
				<SearchForm
					setPage={this.setPage}
					searchFunction={this.searchFunction} />)
			}
			case "results": { return (
				<ResultsContainer
					setPage={this.setPage}
					results={results}
					seeRecipe={this.seeRecipe}
				/>)
			}
			case "show": {
				return (
					<Show
					setPage={this.setPage}
					recipe={this.state.recipe} />
			)}
			case "preferences": {
				return (<PreferencesContainer
					currentUser={this.state.currentUser}
					setPage={this.setPage} />
				)}
		}
	}
	

	render() {
		const { userMenuShown, currentUser, loginShown, logOutClicked } = this.state
		return (
      <Container className="main">
        <nav>
          <UserMenu
            setPage={this.setPage}
            logOutClick={this.logOutClick}
            displayUserMenu={this.displayUserMenu}
            userMenuShown={userMenuShown}
            currentUser={currentUser}
          />
          <LoginButton
            displayLogin={this.displayLogin}
            currentUser={currentUser}
            displayUserMenu={this.displayUserMenu}
          />
        </nav>

        <LoginForm
          loginFunction={this.loginFunction}
          signUpFunction={this.signUpFunction}
          displayLogin={this.displayLogin}
          loginShown={loginShown}
        />
        <LogOutForm
          displayLogin={this.displayLogin}
          logOutClicked={logOutClicked}
          logOut={this.logOut}
        />

        <Header as="h1" className="title" onclick={this.setPage("home")}>
          COOKLE
        </Header>
        <Header.Subheader>The Recipe App</Header.Subheader>

        {this.renderComponents()}
      </Container>
    );
	}
}
export default Home;
