import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Container } from "semantic-ui-react";
import LoginButton from "./Menus/LoginButton";
import LoginForm from "./Menus/LoginForm";
import UserMenu from "./Menus/UserMenu";
import SearchForm from "./SearchFilters/SearchForm";
import ResultsContainer from "./SearchResults/ResultsContainer";
import LogOutForm from "./Menus/LogOutForm";
import PreferencesContainer from "../Containers/PreferencesContainer";
import Show from "./ShowPage/Show";

// const baseURL = 'https://cookle-recipe-app.herokuapp.com'
const baseURL = 'http://localhost:3000'

class Home extends React.Component {
  
  state = {
    loginShown: false,
    currentUser: null,
    userPrefs: null,
    savedRecipes: [],
    userMenuShown: false,
    results: [],
    recipe: null,
    logOutClicked: false,
    currentPage: "home",
    errorMsg: null
  };

  // display user menu when logged in
  displayUserMenu = () => {
    this.setState({
      userMenuShown: !this.state.userMenuShown
    });
  };

  // display login menu when not logged in
  displayLogin = () => {
    this.setState({
      loginShown: !this.state.loginShown
    });
  };

  // set user in state after login
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

  // set error message in state
  setErrorMsg = msg => {
    this.setState({
      errorMsg: msg
    });
  }

  // show logout button from user menu
  showLogOut = () => {
    this.setState({
      logOutClicked: !this.state.logOutClicked
    });
  };

// log out
  logOut = () => {
    this.setState({
      currentUser: null,
      userPrefs: null,
      savedRecipes: null
    });
    this.showLogOut();
    this.displayUserMenu()
  };

  // log in user and set to state then fetch preferences and saved recipes
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
        this.getPreferences(user.id)
        this.getSavedRecipes(user.id)
      })
      .catch(error => {
        console.log( error )
        this.setState({ errorMsg: error })
      })
    e.target.reset();
  };

// fetch preferences of current user and save to state
  getPreferences = (user_id) => {
    fetch(`${baseURL}/users/${user_id}/preferences`)
      .then(res => res.json())
      .then(userPrefs =>
        this.setState({
          userPrefs
        })
      )
      .catch(console.log);
  }

  // getUserPreferences = (preferences) => {
  //   const userId = this.state.currentUser
  //   const userPrefs = preferences.filter(preference => preference.user_id === userId)
  //   this.setState({
  //     userPrefs: userPrefs
  //   })
  //   // return userPrefs.map(preference => this.getPreferenceTypeAndName(preference))
  // }


// fetch saved recipes of current user and save to state
  getSavedRecipes = (user_id) => {
    fetch(`${baseURL}/users/${user_id}/saved_recipes`)
      .then(res => res.json())
      .then(savedRecipes =>
        this.setState({savedRecipes})
      )
      // .then(console.log)
      .catch(console.log);
  }

  // save a recipe
  saveRecipe = (recipe_id) => {
    const user = this.state.currentUser
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        recipe_id: recipe_id,
        user_id: this.state.currentUser
      })
    }
    fetch(`${baseURL}/saved_recipes`, configObj)
      .then(res => res.json())
      .then(() => this.getSavedRecipes(user))
      .catch(console.log)
  }

  // remove saved recipe
  unSaveRecipe = (recipe) => {
    console.log(recipe)
  }



  // send search to back end and set results in state and render results
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




// render search results
  renderResults = data => {
    this.setState({
      results: data.results
    });
    console.log(data.results)
  };




  // see full details of selected recipe
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

  // set page - this is terrible, replace with react router!
  setPage = page => {
    if (this.state.currentPage === page) return page;
    this.setState({
      currentPage: page
    });
  };



  // render components depending on selected page - replace with react router
  renderComponents = () => {
    const { currentPage, results, recipe, userPrefs, currentUser, savedRecipes } = this.state;
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
            currentUser={currentUser}
            setPage={this.setPage}
            savedRecipes={savedRecipes}
            results={results}
            seeRecipe={this.seeRecipe}
            saveRecipe={this.saveRecipe}
            unSaveRecipe={this.unSaveRecipe}
          />
        );
      }
      case "show": {
        console.log(recipe)
        return (
          <Show
            currentUser={currentUser}
            setPage={this.setPage}
            savedRecipes={savedRecipes}
            seeRecipe={this.seeRecipe}
            recipe={recipe}
            saveRecipe={this.saveRecipe}
            unSaveRecipe={this.unSaveRecipe}
          />
        );
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

  // render
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
