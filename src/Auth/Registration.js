import React, {useState} from 'react';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import {useHistory} from "react-router-dom";

const Registration = () => {
	const [registration, setRegistration] = useState({})
	const history = useHistory()
	const [message, setMessage] = useState("")
	const [error, setError] = useState(false)
	const handleChange = (event, {name, value}) => {
		const newL = {
			username: registration.username,
			password: registration.password,
			confirm: registration.confirm
		};
		newL[name] = value;
		setRegistration(newL);
	}
	const handleRegistration = () => {
		if (registration.password !== registration.confirm) {
			setMessage("Passwords doesn't match")
			setError(true);
			return
		}
		fetch("/newUser", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: registration.username,
				password: registration.password
			})
		}).then(r => {
			if (r.ok) {
				history.push("/ide")
			} else {
				setMessage("Something went wrong with the server")
				setError(true)
			}
		})
	}

	return (
		<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
			<Grid.Column style={{maxWidth: 450}}>
				<Header as='h2' color='teal' textAlign='center'>
					<Image src='/logo.png'/> Log-in to your account
				</Header>
				<Form size='large' onSubmit={handleRegistration} error={error}>
					<Message
						error
						header='Error'
						content={message}
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
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder='Confirm password'
							name="confirm"
							type='password'
							onChange={handleChange}
						/>
						<Button color='teal' fluid size='large'>
							Login
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default Registration;