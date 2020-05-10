import React from 'react';
import { Button, Form, Segment, Sidebar, Message } from 'semantic-ui-react';

const LoginForm = props => {
	const {
		loginFunction,
		loginShown,
		errorMsg,
		setErrorMsg
	} = props;
	
	const validateEmail = (input) => {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
			setErrorMsg(false)
			return false
		}
		setErrorMsg("Please enter a valid email address")
	}
	
	return (
		<Sidebar
			as={Segment}
			animation='overlay'
			icon='labeled'
			inverted
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
							onChange={e => validateEmail(e.target.value)}
						/>
						<Form.Input
							name='password'
							label='Password'
							placeholder='Password'
							type='password'
							required
						/>
					</Form.Group>

					<Button
						name='login'
						type='submit'
					>
						Login
					</Button>
					<Button
						name='create'
						type='submit'
						secondary
					>
						Sign Up
					</Button>
				</Form>
			</Segment>
			{errorMsg &&
				<Message className="error-msg">
				{errorMsg}
				</Message>}
			
		</Sidebar>
	);
};

export default LoginForm;
