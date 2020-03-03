import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const LoginButton = props => {
	const { displayLogin, currentUser, displayUserMenu } = props;

	if (!currentUser) {
		return (
			<div onClick={() => displayLogin()}>
				<Button animated='vertical'>
					<Button.Content visible>Login/Sign-up</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow down' />
					</Button.Content>
				</Button>
			</div>
		);
	} else {
		return (
			<div onClick={() => displayUserMenu()}>
				<Button animated='vertical'>
					<Button.Content visible>{currentUser.email}</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow down' />
					</Button.Content>
				</Button>
			</div>
		);
	}
};

export default LoginButton;
