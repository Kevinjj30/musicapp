import React from 'react';
import { AppBar, Button, TextField, Typography, Grid } from '@material-ui/core';

const SignIn = props => (
	<div className="sign-container">
		<AppBar position="static">
			<Typography>My Music App</Typography>
		</AppBar>
		<Grid
  container
  direction="column"
  justify="space-between"
  alignItems="center"
>
		<form className="sign-form">
			<TextField
				variant="outlined"
				margin="normal"
				//required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
			/>
			<TextField 
				variant="outlined"
				margin="normal"
				//required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			/>
			<Button
				//type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={() => { props.signIn() }}
			>Sign In</Button>
		</form>
		</Grid>
	</div>
)

export default SignIn;