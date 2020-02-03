import React, {Component} from 'react';
import OnlineSwitch from './online';
import VolumeSlider from './volume';
import SoundQuality from './soundquality';
import { Container, Paper, Chip, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: [],
			online: true,
			volume: 80,
			quality: 'normal',
		};
	}

	// this recives a string and adds or removes it based on if it is in the notifications array
	toggleNotification = ( msg) => {
		const msgIndex = this.state.notifications.indexOf( msg )

		if ( this.state.notifications.includes( msg ) ) {
			this.state.notifications.splice( msgIndex, 1 )
		} else {
			this.setState({ notifications: [...this.state.notifications, msg] })
		}
	}
	addNotification = ( msg ) => {
		this.setState({ notifications: [...this.state.notifications, msg] })
	}
	removeNotification = ( msg ) => {
		const msgIndex = this.state.notifications.indexOf( msg )
		this.state.notifications.splice( msgIndex, 1 )
	}

	toggleOnline = () => {
		this.setState({ online: !this.state.online })

		const msg = "Your application is offline. You won't be able to share or stream music to other devices."

		this.toggleNotification( msg )
	}
	
	volumeSlider = ( newValue ) => {
		this.setState({ volume: newValue })

		const msg = "Listening to music at a high volume could cause long-term hearing loss."
		const msg2 = "Your music is now muted"


		if ( ( newValue > 80) && !this.state.notifications.includes( msg ) ) {
			this.addNotification( msg )
		}
		if ( ( newValue <= 80) && this.state.notifications.includes( msg ) ) {
			this.removeNotification( msg )
		}
			if ( ( newValue === 0) && !this.state.notifications.includes( msg2 ) ) {
				this.addNotification( msg2 )
			}
			if ( ( newValue > 0) && this.state.notifications.includes( msg2 ) ) {
				this.removeNotification( msg2 )
		}
	}

	soundQuality = ( event ) => {
		this.setState({ quality: event.target.value })

		const msg = "Music quality is degraded. Increase quality if your connection allows it."
		const msg2 = "Prepare for some bad-ass high sound quality"
		
		
		if ( (event.target.value === 'low') && !this.state.notifications.includes( msg ) ) {
			this.addNotification( msg )
		}
		if ( (event.target.value !== 'low') && this.state.notifications.includes( msg ) ) {
			this.removeNotification( msg )
		}
		if ( (event.target.value === 'high') && !this.state.notifications.includes( msg2 ) ) {
			this.addNotification( msg2 )
		}
		if ( (event.target.value !== 'high') && this.state.notifications.includes( msg2 ) ) {
			this.removeNotification( msg2)
		}
	
	}


	render() {

		return (
	

			<div className="dashboard-wrapper">

				<h1>Welcome User!</h1>

           <div className="dashboard-row">
					
					<div className="dashboard-col">
						<OnlineSwitch
							onlineState={this.state.online}
							onlineFunc={this.toggleOnline}>
						</OnlineSwitch>
					</div>
				

					<div className="dashboard-col">
						<VolumeSlider
							volumeState={this.state.volume}
							volumeFunc={this.volumeSlider}>
						</VolumeSlider>
					</div>

					<div className="dashboard-col">
						<SoundQuality 
							qualityState={this.state.quality} 
							qualityFunc={this.soundQuality}>	
						</SoundQuality>
					</div>

				
				</div>


				<div className="notifications">
					<h3>Notifications:</h3>
					{this.state.notifications.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>

			</div>
			
		)
	}
}
				
	

export default Dashboard;