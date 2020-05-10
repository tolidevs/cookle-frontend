import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Container } from "semantic-ui-react";
import LoginButton from "../Components/LoginButton";
import LoginForm from "../Components/LoginForm";
import UserMenu from "../Components/UserMenu";
import SearchForm from "./SearchForm";
import ResultsContainer from "./ResultsContainer";
import LogOutForm from "../Components/LogOutForm";
import PreferencesContainer from "../Containers/PreferencesContainer";
import Show from "./Show";

const baseURL = 'https://cookle-recipe-app.herokuapp.com'
// const baseURL = 'http://localhost:3000'

class Home extends React.Component {
  
  state = {
    loginShown: false,
    currentUser: null,
    userPrefs: null,
    userMenuShown: false,
    results: [],
    recipe: null,
    logOutClicked: false,
    currentPage: "home",
    errorMsg: null
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
      this.setErrorMsg(data.message)
    } else {
      this.displayLogin()
      this.setState({
        currentUser: data.id,
        loginShown: false
      });
    }
  };

  setErrorMsg = msg => {
    this.setState({
      errorMsg: msg
    });
  }

  showLogOut = () => {
    this.setState({
      logOutClicked: !this.state.logOutClicked
    });
  };

  logOut = () => {
    this.setState({
      currentUser: null,
      userPrefs: null,
    });
    this.showLogOut();
    this.displayUserMenu()
  };

  loginFunction = (e, email, password, button) => {
    e.preventDefault();
    const data = { email, password };

    fetch(`${baseURL}/${button.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(user => {
        this.setUser(user)
        this.getPreferences()
      })
      .catch(error => {
        console.log( error )
        this.setState({ errorMsg: error })
      })
    e.target.reset();
  };

  getPreferences = () => {
    fetch(`${baseURL}/user_preferences`)
      .then(res => res.json())
      .then(preferences =>
        this.getUserPreferences(preferences)
      )
      .then(console.log)
      // .catch(console.log);
  }

  getUserPreferences = (preferences) => {
    const userId = this.state.currentUser
    const userPrefs = preferences.filter(preference => preference.user_id === userId)
    this.setState({
      userPrefs: userPrefs
    })
    // return userPrefs.map(preference => this.getPreferenceTypeAndName(preference))
  }

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
    fetch(`${baseURL}/search-recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(searchParams)
    })
      .then(res => res.json())
      .then(results => {
        this.renderResults(results);
      })
      .then(() => this.setState({ currentPage: "results" }))
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: error })
      })
    e.target.reset();
  };

  renderResults = data => {
    this.setState({
      results: data.results
    });
  };

  seeRecipe = id => {
    const data = { id };
    console.log(data, id);

    fetch(`${baseURL}/get-recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe, currentPage: "show" });
      })
      .catch(console.log);
  };

  setPage = page => {
    if (this.state.currentPage === page) return page;
    this.setState({
      currentPage: page
    });
  };

  renderComponents = () => {
    const { currentPage, results, recipe, userPrefs, currentUser } = this.state;
    switch (currentPage) {
      case "home": {
        return (
          <SearchForm
            setPage={this.setPage}
            searchFunction={this.searchFunction}
          />
        );
      }
      case "results": {
        return (
          <ResultsContainer
            setPage={this.setPage}
            results={results}
            seeRecipe={this.seeRecipe}
          />
        );
      }
      case "show": {
        console.log(recipe)
        return <Show setPage={this.setPage} seeRecipe={this.seeRecipe} recipe={recipe} />;
      }
      case "preferences": {
        return (
          <PreferencesContainer
            userPrefs={userPrefs}
            currentUser={currentUser}
            setPage={this.setPage}
          />
        );
      }
      default: {
        return (
          <SearchForm
            setPage={this.setPage}
            searchFunction={this.searchFunction}
          />
        );
      }
    }
  };

  render() {
    const {
      userMenuShown,
      currentUser,
      loginShown,
      logOutClicked,
      errorMsg
    } = this.state;
    return (
      <Container className="main">
        <nav>
          <UserMenu
            setPage={this.setPage}
            showLogOut={this.showLogOut}
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
          // displayLogin={this.displayLogin}
          loginShown={loginShown}
          errorMsg={errorMsg}
          setErrorMsg={this.setErrorMsg}
        />
        <LogOutForm
          displayUserMenu={this.displayUserMenu}
          showLogOut={this.showLogOut}
          logOutClicked={logOutClicked}
          logOut={this.logOut}
        />

        
          <Header as="h1" className="title">
            COOKLE
          </Header>
          <Header.Subheader>The Recipe App</Header.Subheader>
        

        {this.renderComponents()}
      </Container>
    );
  }
}
export default Home;
