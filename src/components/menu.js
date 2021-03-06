//This link helped me learn about passing data from child to parent components through callback functions: https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
	/*event.target only works if you pass event as an argument into the function/callback. 
	If you call event without passing it as an argument, 
	it will reference the global event object which won't work. 
	The event object must be passed as an argument into the callback so that React knows to make reference 
	to the event object ONLY of the function and not the global event.*/	
import React from "react";



class Menu extends React.Component {
	
	showStarters = () => {

	this.props.showMenu("Starters");

	}
	
	showDrinks = () => {

	this.props.showMenu("Drinks");

	}
	
	showMainDishes = () => {

	this.props.showMenu("Main Dishes");

	}
	
	showDessertsMenu = () => {

	this.props.showMenu("Desserts");

	}
	
	showKidsMenu = () => {

	this.props.showMenu("Kids");

	}
	
	showVegetarian = () => {

	this.props.showMenu("Vegetarian");

	}





	render(){
		return(
		
		<div className="Menu" id="food-menu">
		
		<h1>{this.props.currentBodyDisplay}</h1>
	
		<div id="starters" className="menu-panel">
		
			<div className="menu-subsection" id="Starters" onClick={this.showStarters}>			

			<img src={require("../images/starters.png")}/>
			
			<h1>STARTERS</h1>

	
			</div>
			
			<div className="menu-subsection" id="Main Dishes" onClick={this.showMainDishes}>			

			<img src={require("../images/main-dishes.jpg")}/>
			
			<h1>MAIN DISHES</h1>

	
			</div>
			
			<div className="menu-subsection" id="Kids" onClick={this.showKidsMenu}>			

			<img src={require("../images/balloons.png")}/>
			
			<h1>KIDS</h1>

	
			</div>
			
			<div className="menu-subsection" id="Drinks" onClick={this.showDrinks}>			

			<img src={require("../images/drinks.jpg")}/>
			
			<h1>DRINKS</h1>

	
			</div>
			
			<div className="menu-subsection" id="Desserts" onClick={this.showDessertsMenu}>			

			<img src={require("../images/desserts.webp")}/>
			
			<h1>DESSERTS</h1>

	
			</div>
			
			<div className="menu-subsection" id="Vegetarian" onClick={this.showVegetarian}>			

			<img src={require("../images/vegetarian.jpg")}/>
			
			<h1>VEGETARIAN</h1>

	
			</div>
	
		
		</div>	

</div>
		
		);
	}
	
}


export default Menu;