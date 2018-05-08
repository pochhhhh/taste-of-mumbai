import React from "react";

class Navbar extends React.Component{
	
	
	render(){
		
		
		return(
		
<nav className="Navbar navbar-default">
		
		
		<div className="navbar-logo"><img src={require("./logo.png")}/></div>
		
		<ul>
		
		<a href="#"><li>HOME</li></a>
			<a href="#"><li>MENU</li></a>
				<a href="#"><li>REVIEWS</li></a>
					<a href="#"><li>ABOUT US</li></a>
						<a href="#"><li>CONTACT</li></a>



																
	
		</ul>
		
		
		
		
		
		</nav>
		
		);
		
	}
	
	
	
}




export default Navbar;