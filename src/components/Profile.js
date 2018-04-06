import React from 'react';
import Moment from 'react-moment';

export default class Profile extends React.Component {
	render(){
		return (
			<div className="profile">
				<img className="profile__image" src={this.props.profile.avatar_url} alt="Profile photo"></img>
				<div className="profile__data">
					<div>
						<h2 className="profile__title">{this.props.profile.name}</h2>
						<svg className="svg" fill="#7c7e7d" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/>
						</svg>
						{(this.props.profile.location) ? <span>{this.props.profile.location}</span> : <span>unknown</span>}
						<p className="profile__created">Created: <span><Moment format="DD.MM.YYYY">{this.props.profile.created_at}</Moment></span></p>
						<p className="profile__updated">Updated: <span><Moment format="DD.MM.YYYY">{this.props.profile.updated_at}</Moment></span></p>
					</div>
					<div className="profile__links">
						<a href={this.props.profile.html_url} target="_blank">[ Github | </a>
						<a href={this.props.profile.blog} target="_blank">Blog ]</a>
					</div>
					<div className="profile__numbers">
						<p className="profile__repos"><span>{this.props.profile.public_gists} </span>repos</p>
						<p className="profile__gists"><span>{this.props.profile.public_repos} </span>gists</p>
					</div>
				</div>
			</div>
		)
	}
}