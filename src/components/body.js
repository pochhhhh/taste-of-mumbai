import React from "react";
import Intro from "./intro";
import SidePanel from "./side-panel";
import Menu from "./menu";


class Body extends React.Component{
	
	
	
		render(){
			
			if(this.props.currentBodyDisplay === ""){
		
		alert("this is null");
		
	}
		
		return(
		
		<div className="Body">	
		
		
		{this.props.currentBodyDisplay === "Intro" && 
		
		<Intro 
		companyName = {this.props.companyName} 
		introText = {this.props.introText}
		currentBodyDisplay = {this.props.currentBodyDisplay}
		showFoodSubsection = {this.props.showFoodSubsection}
		/>}
		
		{this.props.currentBodyDisplay === "Menu" && 
		<Menu 
		toggleMenu = {this.props.toggleMenu}
		currentBodyDisplay = {this.props.currentBodyDisplay}
		showFoodSubsection = {this.props.showFoodSubsection}
		/>
		}
		
		{/*Conditionals to render food Menu components*/}
		
		{this.props.currentBodyDisplay === "Starters" && <h1>Starters</h1>}
		{this.props.currentBodyDisplay === "Main Dishes" && <h1>Main Dishes</h1>}
		{this.props.currentBodyDisplay === "Kids" && <h1>Kids</h1>}
		{this.props.currentBodyDisplay === "Drinks" && <h1>Drinks</h1>}
		{this.props.currentBodyDisplay === "Desserts" && <h1>Desserts</h1>}
		{this.props.currentBodyDisplay === "Vegetarian" && <h1>Vegetarian</h1>}

		
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
