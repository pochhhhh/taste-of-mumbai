import React from "react";


class Menu extends React.Component {
	
	render(){
		return(
		
		<div className="Menu">
		
		<h2>MENU:</h2>


		<ul>

		<li>SOMETHING YUMMY AND DELICIOUS</li>
		<li>SOMETHING YUMMY AND DELICIOUS</li>
		<li>SOMETHING YUMMY AND DELICIOUS</li>
		<li>SOMETHING YUMMY AND DELICIOUS</li>

		</ul>
		
		<button onClick={this.props.toggleMenu}>About Us</button>

</div>
		
		);
	}
	
}


export default Menu;