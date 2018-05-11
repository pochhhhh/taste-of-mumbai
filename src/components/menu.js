import React from "react";


class Menu extends React.Component {
	

	
	render(){
		return(
		
		<div className="Menu">
		
		<h1>{this.props.currentFoodSubsectionMenu}</h1>
	
		<div id="starters" className="menu-panel">
		
			<div className="menu-subsection">			

			<img src={require("../images/starters.png")}/>
			
			<h1>STARTERS</h1>

	
			</div>
			
			<div className="menu-subsection">			

			<img src={require("../images/main-dishes.jpg")}/>
			
			<h1>MAIN DISHES</h1>

	
			</div>
			
			<div className="menu-subsection">			

			<img src={require("../images/balloons.png")}/>
			
			<h1>KIDS</h1>

	
			</div>
			
			<div className="menu-subsection">			

			<img src={require("../images/drinks.jpg")}/>
			
			<h1>DRINKS</h1>

	
			</div>
			
			<div className="menu-subsection">			

			<img src={require("../images/desserts.webp")}/>
			
			<h1>DESSERTS</h1>

	
			</div>
			
			<div className="menu-subsection">			

			<img src={require("../images/vegetarian.jpg")}/>
			
			<h1>VEGETARIAN</h1>

	
			</div>
	
		
		</div>
		
		
	
		
		
		
		
		<button onClick={this.props.toggleMenu}>About Us</button>

</div>
		
		);
	}
	
}


export default Menu;