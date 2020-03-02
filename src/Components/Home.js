import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Sidebar, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';
import SearchForm from './SearchForm'

class Home extends React.Component {
	state = {
		loginShown: false,
		currentUser: null,
		userMenuShown: false
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

	loginFunction = (email, password) => {
		const data = { email, password };
		this.setUser(data)

		// fetch('https://localhost:3000/users/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(data)
		// })
		// 	.then(res => res.json)
		// 	.then(this.setUser)
		// 	.catch(console.log);
	};

	signUpFunction = (email, password) => {
		const data = { email, password };
		this.setUser(data)
	// 	fetch('http://localhost:3000/users/create', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(data)
	// 	})
	// 		.then(res => res.json)
	// 		.then(this.setUser)
	// 		.catch(console.log);
	};

	render() {

			return (
				< Container>
					<Sidebar.Pushable as={Segment}>
						{ !this.state.userMenuShown ? <LoginForm
							loginFunction={this.loginFunction}
							signUpFunction={this.signUpFunction}
							displayLogin={this.displayLogin}
							loginShown={this.state.loginShown}
						/> : <UserMenu
								displayUserMenu={this.displayUserMenu}
								userMenuShown={this.state.userMenuShown}
							/>
						}
						
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
					<SearchForm />
				</Container>
			);

	}
}
export default Home;
