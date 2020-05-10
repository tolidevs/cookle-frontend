import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from "./Components/Home";


function App() {
	return <Home />;
}

export default App;

// to do list:
// add save button to save recipe on show page
// add page to display saved recipes (link heart icon)
// update preferences page so that when submit it saves the preferences in back end
// have preferences page show preferences
// have search page auto load preferences
// react-router