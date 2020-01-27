import React, { Component } from 'react';
import './App.css';
import navbar from '.components/navbar'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		}
	}

	toggleSignIn = () => {
		this.setState({ loggedIn: !this.state.loggedIn })
	}

	render() {
		return (
			<div id="container">
				<header>
					<navbar/>
				</header>

			</div>
		)
	}
}

export default App;