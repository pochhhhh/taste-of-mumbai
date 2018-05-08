import React from "react";
import Intro from "./intro";


class Body extends React.Component{
		
	render(){
		
		return(<div className="Body">	
	
	<Intro companyName={this.props.companyName} introText={this.props.introText} showIntro = {this.props.showIntro} />
	
		</div>
			  
		);
		
	}
	
}


export default Body;
