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
				<Form className="login-form"
					onSubmit={e =>

					signUpFunction(e.target.email.value, e.target.password.value)
				}
				>
					<Form.Group widths={2}>
						<Form.Input
							name="email"
							label='Email'
							placeholder='Email Address'
							type='email'
							required
						/>
						<Form.Input
							name="password"
							label='Password'
							placeholder='Password'
							type='password'
							required
						/>
					</Form.Group>

					<Button name="login" type="submit">Login</Button>
					{/* <Button name="signup" type="submit" secondary onClick={e => console.log(e.target)}>Sign Up</Button> */}
				</Form>
			</Segment>
		</Sidebar>
	);
};

export default LoginForm;
