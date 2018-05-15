import React from "react";

class KidsMenu extends React.Component{
	
	showMenu = () => {

		this.props.showMenu("Menu");
	
	}
	
	render(){
	
	return(
	
	<div>
	<h1>KIDS</h1>
	<ul>
	
	<li>Something delicious and yummy - <strong>£5</strong></li>
		<li>Something delicious and yummy - <strong>£5</strong></li>
			<li>Something delicious and yummy - <strong>£5</strong></li>
				<li>Something delicious and yummy - <strong>£5</strong></li>
					<li>Something delicious and yummy - <strong>£5</strong></li>

	
	</ul>
	
	<button onClick = {this.showMenu}>BACK</button>
	</div>
	
	);
	
	}
	
	
}


export default KidsMenu;