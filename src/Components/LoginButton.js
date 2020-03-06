import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const LoginButton = props => {
	const { displayLogin, currentUser, displayUserMenu } = props;

	if (!currentUser) {
		return (
		<div>
			<Button
			color='teal'
			floated="right"
			animated="vertical"
			onClick={displayLogin}
			>
			<Button.Content visible>
				<Icon name="sign-in" />
			</Button.Content>
			<Button.Content hidden>
				Log In
			</Button.Content>
			</Button>
		</div>
		);
		} else {
			return (
        <div>
			<Button
				color="teal"
				floated="right"
				animated="vertical"
				onClick={displayUserMenu}
			>
				<Button.Content visible>
					<Icon name="sign in" />
				</Button.Content>
				<Button.Content hidden>Account</Button.Content>
			</Button>
			</div>
		);
		}
};

export default LoginButton;
