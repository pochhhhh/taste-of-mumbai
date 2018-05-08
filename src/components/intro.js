import React from "react";


class Intro extends React.Component{
	
	alertScreen = () => {
		
		if(1 + 1 == 2){
			
			alert(this.props.showIntro);
			
		} else {
			
			alert("lo!");
			
		}

		
	}

	render(){
		
			return(<div className="Intro">
			
			<div className="intro-text">
							
							{/*<h1>{this.props.introState} from the Intro component</h1>*/}
			
			<h1>{this.props.companyName} - Prepare to treat your tastebuds!</h1>
			
			<hr/>
			
			<br/>
			
			<p>{this.props.introText}</p>
			
			<h4>Call us on 0207123456789 to book a table today!</h4>
			
			<button onClick={this.alertScreen}><p>VIEW OUR MENU!</p></button>
			
			</div>
			
			<div className="side-info-right">
			
			<div className="social-media-panel"> 
			
				<i class="fa fa-instagram fa-2x"></i>
				<i class="fa fa-facebook fa-2x"></i>
				<i class="fa fa-twitter fa-2x"></i>
				<i class="fa fa-youtube fa-2x"></i>
			
			</div>
			
		
			<ul>
			
			<li>
			<h2>Phone</h2>
			
			<ul>
			<li>0800000000</li>

			</ul>
			
			</li>
				<li>
				<h2>Opening Hours</h2>
					
			<ul>
			<li>12pm - 11pm</li>
			</ul>
				</li>

					<li>
					<h2>Location</h2>
						
			<ul>
			<li>Wakanda</li>
			</ul>
					
					
					</li>
						<li><h2>Last Orders</h2>
							
			<ul>
			<li>10:45pm</li>

			</ul>
						</li>
				
			</ul>
		
			
			
			</div>
	
	</div>);
	
		
	}
	

	
}


export default Intro;