import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Home from './Home';
import Show from './Show';

class Main extends React.Component {
	state = {
		showPage: false,
		recipe: null
	};

	showPage = recipe => {
		this.setState({
			showPage: !this.state.showPage,
			recipe
		});
	};

	componentDidMount() {}

	render() {
		if (!this.state.showPage) {
			return <Home showPage={this.showPage} />;
		} else {
			return <Show showPage={this.showPage} recipe={this.state.recipe} />;
		}
	}
}
export default Main;
