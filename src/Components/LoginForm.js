import React from 'react';
import { Button, Form, Segment, Sidebar } from 'semantic-ui-react';

const LoginForm = props => {
	const { loginFunction, signUpFunction, displayLogin, loginShown } = props;
	return (
		<Sidebar
			as={Segment}
			animation='overlay'
			icon='labeled'
			inverted
			onHide={displayLogin}
			direction={'top'}
			visible={loginShown}
			width='thin'>
			<Segment>
				<Form className="login-form">
					<Form.Group widths={2}>
						<Form.Input
							label='Email'
							placeholder='Email Address'
							type='email'
							required
						/>
						<Form.Input
							label='Password'
							placeholder='Password'
							type='password'
							required
						/>
					</Form.Group>

					<Button
						onClick={e =>
							loginFunction(
								e.target.parentElement[0].value,
								e.target.parentElement[1].value
							)
						}>
						Login
					</Button>
					<Button
						secondary
						onClick={e =>
							signUpFunction(
								e.target.parentElement[0].value,
								e.target.parentElement[1].value
							)
						}>
						Sign Up
					</Button>
				</Form>
			</Segment>
		</Sidebar>
	);
};

export default LoginForm;
