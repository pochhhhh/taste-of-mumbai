import React from "react";
import Intro from "./intro";
import SidePanel from "./side-panel";


class Body extends React.Component{
	
	
	render(){
		
		return(
		
		<div className="Body">	
		
		{/*{this.props.introShowing ? <h1>Intro is showing</h1> : <h1>Not showing</h1>}
		<button onClick={this.props.showMenu}>Click Me</button>*/}
		
		{this.props.introShowing ? <Intro 
		introShowing={this.props.introShowing} 
		showMenu = {this.props.showMenu}
		companyName = {this.props.companyName} 
		introText={this.props.introText} 
		/> : <h1>MENU</h1>}
		


<SidePanel />
		
		

	
		

	
		</div>
			  
		);
		
	}
	
	/*I created a function called showMenu() to change the state of the main App component, then passed down the function to child components as props. 
	I used bind for the function and defined the bind in the constructor. 
	I then set some conditionals in the child components that will render only certain JSX elements or components depending on 
	the condition determined by the App state, set by the function showMenu() I created */
	
}


export default Body;
