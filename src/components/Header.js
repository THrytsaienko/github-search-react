import React from 'react';

export default class Header extends React.Component {
	handleSearch = (e) => {
		e.preventDefault();
		const userName = e.target.elements.userName.value.trim();
		const input = document.querySelector('.header__input');
		if (userName === '') {
			input.style.borderColor = 'red';
		} else {
			input.style.borderColor = '#eeeeee';
			const error = this.props.handleSearch(userName);
		}
	}

	render() {
		return (
			<div className="header">
				<h1 className="header__title">Github user info</h1>
				<form className="header__search" onSubmit={this.handleSearch}>
					<input className="header__input" name="userName" type="search" placeholder="Username" />
					<input className="header__button" type="submit" value="Search" />
				</form>
			</div>
		)
	}
}