import React from 'react';
import Header from './Header';
import Error from './Error';
import Profile from './Profile';
import Repos from './Repos';

export default class App extends React.Component {
	userOne = 'octocat';
	userTwo = 'brendaneich';
	state = {
		profile: {},
		repos: [],
		error: undefined
	};

	handleSearch = (userName) => {
		if (userName === this.userOne || userName === this.userTwo) {
			if (this.prevUser !== userName) {
				this.setState(() => ({ error: false }));
				this.getProfile(userName);
			}
		} else {
			this.setState(() => ({
				error: true,
				profile: {},
				repos: [],
			}));
		}
		this.prevUser = userName;
	}

	getProfile(userName) {
		fetch(`http://localhost:8080/users/${userName}`)
			.then((response) => {
				return response.json();
			})
			.then(resProfile => {
				this.setState({ 
					profile: resProfile
				})
			})
			.catch(err => console.log(err));

		fetch(`http://localhost:8080/users/${userName}/repos`)
			.then((response) => {
				return response.json();
			})
			.then(resRepos => {
				this.setState({
					repos: resRepos
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="container">
				<Header
					handleSearch={this.handleSearch}
				/>
				{this.state.error && (
					<Error />
				)}
				{
					Object.keys(this.state.profile).length > 0 && (
						<div>
							<Profile
								profile={this.state.profile}
							/>
							<Repos
								repos={this.state.repos}
							/>
						</div>
					)
				}
			</div>
		);
	}
}