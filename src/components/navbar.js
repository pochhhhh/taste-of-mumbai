import React from "react";

class Navbar extends React.Component{
	
home = () => {
	
this.props.showMenu("Intro");	

}

menu = () =>{
	
this.props.showMenu("Menu");	
	
}
	
	render(){
		
		
		return(
		
<nav className="Navbar navbar-default">
		
		
		<div className="navbar-logo"><a href="#"><img src={require("../images/logo.png")}/></a></div>
		
		<ul>
		
		<a href="#home" onClick={this.home}><li>HOME</li></a>
			<a href="#food-menu" onClick={this.menu}><li>MENU</li></a>
				<a href="#review-section"><li>REVIEWS</li></a>
						<a href="#contact-us"><li>CONTACT</li></a>



																
	
		</ul>
		
		
		
		
		
		</nav>
		
		);
		
	}
	
	
	
}




export default Navbar;