import React, {useState} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie"

const LoginForm = () => {
	const [form, setForm] = useState({
		username: null,
		password: null,
		confirmPassword: null
	});
	const dispatch = useDispatch()
	const [error, setError] = useState(false)
	const history = useHistory();
	const handleLogin = () => {
		fetch("/login", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: form.username,
				password: form.password
			})
		}).then(r => r.json())
			.then(user => {
				if (user) {
					Cookies.set("logged", true, {expires: 1, path: "/"})
					history.push("/ide")
				} else {
					setError(true);
				}
			}).catch(r => setError(true));
	}

	const handleChange = (event, {name, value}) => {
		const newL = {
			username: form.username,
			password: form.password,

		};
		newL[name] = value;
		setForm(newL);
	}

	return (
		<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
			<Grid.Column style={{maxWidth: 450}}>
				<Header as='h2' color='teal' textAlign='center'>
					<Image src='/logo.png'/> Log-in to your account
				</Header>
				<Form size='large' onSubmit={handleLogin} error={error}>
					<Message
						error
						header='Action Forbidden'
						content='Username or password are wrong'
					/>
					<Segment stacked>
						<Form.Input fluid icon='user' iconPosition='left' name={"username"} placeholder='Username'
						            onChange={handleChange}/>
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder='Password'
							name="password"
							type='password'
							onChange={handleChange}
						/>

						<Button color='teal' fluid size='large'>
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us? <Link to={"/register"}>Sign Up</Link>
				</Message>
			</Grid.Column>
		</Grid>
	)
}

export default LoginForm