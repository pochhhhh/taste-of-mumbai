import React from "react";


class Footer extends React.Component{
	
	render(){
		
		return(<div className="Footer">
		
		<h1>INSERT FOOTER HERE</h1>
		
		<div className="footer-contact-panel">
		
			<div className="footer-contact-item">
		
				<img src=""/><i class="fa fa-phone fa-4x"></i>

					<h2>Call Us</h2>
		
						</div>
	
		
			<div className="footer-contact-item">
		
				<img src=""/><i class="fa fa-envelope fa-4x"></i>
		
					<h2>Email us</h2>
		
						</div>
		
		
			<div className="footer-contact-item">
		
				<img src=""/><i class="fa fa-eye fa-4x"></i>

					<h2>Visit Us</h2>
		
						</div>
						
			</div>
		
		
		
		<div className="footer-signature">
		
		<div className="footer-caption">
		
		<div className="footer-logo"><img src={require("./logo.png")}/></div>
		
		
					
			<div className="social-media-panel"> 
			
				<i class="fa fa-instagram fa-2x"></i>
				<i class="fa fa-facebook fa-2x"></i>
				<i class="fa fa-twitter fa-2x"></i>
				<i class="fa fa-youtube fa-2x"></i>
			
			</div>
			
		<p>Taste of Mumbai, 123 Wakanda</p>
		<p>©2018 All rights reserved.</p>
		
	</div>
	
		</div>
		
		</div>
		
		
 		
		);	
	}
		
}

export default Footer;