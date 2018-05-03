import React from "react";
import Sidebar from "./sidebar";
import Menu from "./menu";


class Body extends React.Component{
	
	
	render(){
		
		return(<div className="Body">
		
		<h1>body.js</h1>
		
		<Sidebar />
		
		<Menu />
		
		</div>
			  
		);
		
	}
	
}


export default Body;
