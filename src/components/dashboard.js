import React, {Component} from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			someString: '',
		};
	}

	render() { return (
		<div className="dashboard">
			<p>Dashboard</p>
		</div>
	)}
  
}

export default Dashboard;