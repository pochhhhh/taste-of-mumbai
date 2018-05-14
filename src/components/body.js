import React from "react";
import Intro from "./intro";
import SidePanel from "./side-panel";
import Menu from "./menu";
import Starters from "./starters";
import MainDishes from "./main-dishes";
import Kids from "./kids-menu";
import Drinks from "./drinks-menu";
import Desserts from "./desserts-menu";
import Vegetarian from "./vegetarian-menu";

class Body extends React.Component{
	
	componentWillReceiveProps(nextProps) {
		
  this.setState({ data: nextProps.data });  
  
}
	
		render(){
			
		
		
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
		
		{this.props.currentBodyDisplay === "Starters" && <Starters />}
		{this.props.currentBodyDisplay === "Main Dishes" && <MainDishes />}
		{this.props.currentBodyDisplay === "Kids" && <Kids />}
		{this.props.currentBodyDisplay === "Drinks" && <Drinks />}
		{this.props.currentBodyDisplay === "Desserts" && <Desserts />}
		{this.props.currentBodyDisplay === "Vegetarian" && <Vegetarian />}

	
		
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
