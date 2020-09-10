import React, { Component } from "react";
import "./Navigation.css";
import { ReactComponent as Logo } from '../../assets/img/nav/logo.svg';
import workboard from '../../assets/img/nav/workboard.svg';
import invite from '../../assets/img/nav/invite.svg';

class Navigation extends Component {
	state = { clicked: false }

	handleClick = () => this.setState({clicked: !this.state.clicked })
	render() {
		return (
			<div className="nav-container">
			<div className="wrapper">
				<nav>
					<Logo className='nav-logo' />
					<div className="menu-icon" onClick={this.handleClick}>
						<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
					
					<div className={this.state.clicked ? 'nav-items active' : 'nav-items'}>
						<div className="nav-board">Workshop name<span>&gt; Board A</span>
							<img src={workboard} alt="" />
						</div>
						
						<ul>
							<li>
								<a className="nav-invite-btn" href="# ">
									<img src={invite} alt="" />Invite
								</a>
							</li>
							<li><a className="nav-menu-btn" href="# ">Workshop menu</a></li>
							<li><a className="nav-start-btn" href="# ">Start workshop</a></li>
							<li><a className="nav-user-btn" href="# ">FA</a></li>
						</ul>
						
					</div>
				</nav>
			</div>
		</div>
		);
	}
};

export default Navigation;