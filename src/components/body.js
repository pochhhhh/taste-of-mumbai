import React from "react";
import Intro from "./intro";
import SidePanel from "./side-panel";
import Menu from "./menu";


class Body extends React.Component{
	
	
		render(){
		
		return(
		
		<div className="Body">	
		
		
		{this.props.introShowing && 
		<Intro 
		introShowing = {this.props.introShowing} 
		toggleMenu = {this.props.toggleMenu}
		companyName = {this.props.companyName} 
		introText = {this.props.introText}
		/>}
		
		{!this.props.introShowing && 
		<Menu 
		toggleMenu = {this.props.toggleMenu}
		currentFoodSubsectionMenu = {this.props.currentFoodSubsectionMenu}
		showFoodSubsection = {this.props.showFoodSubsection}
		/>
		}
		
		<SidePanel />
		
		
	
		</div>
			  
		);
		
	}
	
	/*I created a function called toggleMenu() to change the state of the main App component, then passed down the function to child components as props. 
	I used bind for the function and defined the bind in the constructor. 
	I then set some conditionals in the child components that will render only certain JSX elements or components depending on 
	the condition determined by the App state, set by the function toggleMenu() I created */
	
}


export default Body;
