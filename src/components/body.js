import React from "react";
import Sidebar from "./sidebar";
import Menu from "./menu";
import Intro from "./intro";
import StaticImages from "./staticimages"


class Body extends React.Component{
		

	render(){
		
		return(<div className="Body">

		
	
	<Intro introState={this.props.showState} />

		<h1>{this.props.showState} from the Body component</h1>
	
		</div>
			  
		);
		
	}
	
}


export default Body;
