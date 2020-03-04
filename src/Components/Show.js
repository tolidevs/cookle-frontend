import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Sidebar, Container } from 'semantic-ui-react';
import LoginButton from '../Components/LoginButton';
import LoginForm from '../Components/LoginForm';
import UserMenu from '../Components/UserMenu';
import ShowData from '../Components/ShowData';

class Show extends React.Component {
	state = {
		recipe: {}
	};

	componentDidMount() {
		this.setState({
			recipe: this.props.recipe
		});
	}

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

				<div>
					<ShowData recipe={this.props.recipe} />
				</div>
			</Container>
		);
	}
}
export default Show;
