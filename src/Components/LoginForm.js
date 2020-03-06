import React from 'react';
import { Button, Form, Segment, Sidebar } from 'semantic-ui-react';

const LoginForm = props => {
	const { loginFunction, displayLogin, loginShown } = props;
	return (
		<Sidebar
			as={Segment}
			animation='overlay'
			icon='labeled'
			inverted
			onHide={displayLogin}
			direction={'top'}
			visible={loginShown}
			width='thin'
			color='teal'>
			<Segment>
				<Form
					className='login-form'
					onSubmit={e => {
						loginFunction(
							e,
							e.target.email.value,
							e.target.password.value,
							document.activeElement
						)
					}
					}>
					<Form.Group widths={2}>
						<Form.Input
							name='email'
							label='Email'
							placeholder='Email Address'
							type='email'
							required
						/>
						<Form.Input
							name='password'
							label='Password'
							placeholder='Password'
							type='password'
							required
						/>
					</Form.Group>

					<Button name='login' type='submit' onClick={displayLogin}>
						Login
					</Button>
					<Button name='create' type='submit' onClick={displayLogin} secondary>
						Sign Up
					</Button>
				</Form>
			</Segment>
		</Sidebar>
	);
};

export default LoginForm;
