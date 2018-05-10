import React from "react";


class Menu extends React.Component {
	
	render(){
		return(
		
		<div className="Menu">
		
		{/*<h2>MENU:</h2>


		<ul>

		<li>Sides</li>
		<li>Main dishes</li>
		<li>Kids</li>
		<li>Drinks</li>
		<li>Desserts</li>
		<li>Vegetarian</li>
		

		</ul>
		*/}
		
		<div className="menu-panel">
		
			<div className="menu-subsection">			

			<img src={require("../images/starters.png")}/>
			
			<h1>Starters</h1>
	
			<div className="hover-layer"></div>
	
			</div>
		
		<div className="menu-subsection">Main Dishes</div>
		
		<div className="menu-subsection">Kids</div>
		
		<div className="menu-subsection">Drinks</div>
		
		<div className="menu-subsection">Desserts</div>
		
		<div className="menu-subsection">Vegetarian</div>
		
		
		
		
		</div>
		
		
		
		<button onClick={this.props.toggleMenu}>About Us</button>

</div>
		
		);
	}
	
}


export default Menu;