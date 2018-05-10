import React from "react";
import SidePanel from "./side-panel";


class Intro extends React.Component{
	
	render(){
		
			return(<div className="Intro">
	
			
			<div className="intro-text">
			
			<h1>{this.props.companyName} - Prepare to treat your tastebuds!</h1>
			
			<hr/>
			
			<br/>
			
			<p>{this.props.introText}</p>
			
			<h4>Call us on 0207123456789 to book a table today!</h4>
			
			<button onClick={this.props.toggleMenu}><p>VIEW OUR MENU!</p></button>
			
			</div>
	
	</div>);
	
		
	}
	
}


export default Intro;