import React from "react";
import Intro from "./intro";


class Body extends React.Component{
		

	render(){
		
		return(<div className="Body">	
	
	<Intro introState={this.props.showState} />

		{/*<h1>{this.props.showState} from the Body component</h1>*/}
	
		</div>
			  
		);
		
	}
	
}


export default Body;
