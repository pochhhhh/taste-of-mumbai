import React from "react";

const SidePanel = () => {	
	
	/* If writing a stateless functional component, there is no need to insert a render method */
	
		return(

			<div className="SidePanel">
			
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
						
			<li>
					<h2>Last Orders</h2>
					<ul>
					<li>10:45pm</li>
					</ul>
			</li>
				
			</ul>
		
			
			
			</div>

		
		
		);

	
}

export default SidePanel;