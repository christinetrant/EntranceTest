import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation"; 
import Main from "./components/Main/Main"; 

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title : "Waiting for an action ...",
			buttonInfo: null,
			stickyToggled: false,
			textToggled: false,
			borderToggled: false,
			colorToggled: false,
			imageToggled: false,
			layoutToggled: false
		}
	}

	// componentDidMount() {
  //   console.log('Running')
	// }

	handleBtnClick = (e) => {
		console.log('clicked', e.target.value, e.target.parentNode.value)
		let value = e.target.value;
		this.setState({buttonInfo: value})
		this.btnAction(value)
	}
	// Could map here to go to a relevant function if I numbered them but think it's better to have descriptive names for action functions
	btnAction = (val) => {
		if(val === '1' ) { return this.stickyBtn() 			
		} else if(val === '2' ) { return this.textBtn() 
		} else if(val === '3' ) { return this.borderBtn() 
		} else if(val === '4' ) { return this.colorBtn() 
		} else if(val === '5' ) { return this.imageBtn() 
		} else if(val === '6' ) { return this.layoutBtn() } 
	}
	// Each button will obviously be carrying out different actions than now but for example just have them all toggling css classes when clicked
	stickyBtn = () => {
		document.body.classList.toggle("sticky-btn");
		return this.setState({title: `This is the first title:`})
	}
	textBtn = () => {
		this.setState({textToggled: !this.state.textToggled})
		return this.setState({title: `This is the second title:`})
	}
	borderBtn = () => {
		this.setState({borderToggled: !this.state.borderToggled})
		console.log('state:', this.state.borderToggled)
		return this.setState({title: `This is the third title:`})
	}
	colorBtn = () => {
		this.setState({colorToggled: !this.state.colorToggled})
		return this.setState({title: `This is the fourth title:`})
	}
	imageBtn = () => {
		this.setState({imageToggled: !this.state.imageToggled})
		return this.setState({title: `This is the fifth title:`})
	}
	layoutBtn = () => {
		this.setState({layoutToggled: !this.state.layoutToggled})
		return this.setState({title: `This is the sixth title:`})
	}

	render() {
    return (
      <Fragment>
				<Navigation />
				<Main 
					title={this.state.title} 
					buttonInfo={this.state.buttonInfo} 
					onBtnClick={this.handleBtnClick}
					textToggled={this.state.textToggled}
					borderToggled={this.state.borderToggled}
					colorToggled={this.state.colorToggled}
					imageToggled={this.state.imageToggled}
					layoutToggled={this.state.layoutToggled}
				/>
      </Fragment>
    );
  }
}
