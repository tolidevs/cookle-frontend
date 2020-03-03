import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Sidebar, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';

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
			currentUser: data.user
		});
	};

	loginFunction = (email, password) => {
		const data = { email, password };
		fetch('https://localhost:3001', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json)
			.then(this.setUser)
			.catch(console.log);
	};

	signUpFunction = (email, password) => {
		const data = { email, password };
		fetch('https://localhost:3001', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json)
			.then(this.setUser)
			.catch(console.log);
	};

	render() {
		if (!this.state.userMenuShown) {
			return (
				<Sidebar.Pushable as={Segment}>
					<LoginForm
						loginFunction={this.loginFunction}
						signUpFunction={this.signUpFunction}
						displayLogin={this.displayLogin}
						loginShown={this.state.loginShown}
					/>
					<Sidebar.Pusher>
						<Segment>
							<Header as='h1'>COOKLE</Header>
							<Header.Subheader>The Recipe App</Header.Subheader>
							<LoginButton
								displayLogin={this.displayLogin}
								currentUser={this.state.currentUser}
								displayUserMenu={this.displayUserMenu}
							/>
							<Container>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</Container>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			);
		} else {
			return (
				<Sidebar.Pushable as={Segment}>
					<UserMenu
						displayUserMenu={this.displayUserMenu}
						userMenuShown={this.state.userMenuShown}
					/>
					<Sidebar.Pusher>
						<Segment>
							<Header as='h1'>COOKLE</Header>
							<Header.Subheader>The Recipe App</Header.Subheader>
							<LoginButton
								displayLogin={this.displayLogin}
								currentUser={this.state.currentUser}
								displayUserMenu={this.displayUserMenu}
							/>
							<Container>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</Container>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			);
		}
	}
}
export default Home;
