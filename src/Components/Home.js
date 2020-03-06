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

class Home extends React.Component {
  state = {
    loginShown: false,
    currentUser: null,
    userMenuShown: false,
    results: [],
    recipe: null,
    logOutClicked: false,
    currentPage: "home"
  };

  componentDidMount() {}

  displayUserMenu = () => {
    console.log("menu");
    this.setState({
      userMenuShown: !this.state.userMenuShown
    });
  };

  displayLogin = () => {
    console.log("display");
    this.setState({
      loginShown: !this.state.loginShown
    });
  };

  setUser = data => {
    if (data.message) {
      console.log(data.message);
    } else {
      this.setState({
        currentUser: data.id,
        loginShown: false
      });
    }
  };

  showLogOut = () => {
    this.setState({
      logOutClicked: !this.state.logOutClicked
    });
  };

  logOut = () => {
    this.setState({
      currentUser: null
    });
    this.logOutClick();
  };

  loginFunction = (e, email, password, button) => {
    e.preventDefault();
    const data = { email, password };

    fetch(`http://localhost:3000/${button.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(user => {
        this.setUser(user);
      })
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
    fetch("http://localhost:3000/search-recipes", {
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
      .catch(console.log);

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

    fetch("http://localhost:3000/get-recipe", {
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
    // console.log();
    if (this.state.currentPage === page) return page;
    this.setState({
      currentPage: page
    });
  };

  // showPage = (recipe) => {
  // 	this.setState({
  // 		recipe
  // 	});
  // }

  renderComponents = () => {
    const { currentPage, results, recipe } = this.state;
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
            currentUser={this.state.currentUser}
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
      logOutClicked
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
          displayLogin={this.displayLogin}
          loginShown={loginShown}
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
