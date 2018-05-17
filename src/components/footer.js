import React from "react";


class Footer extends React.Component{
	
	render(){
		
		return(<div className="Footer" id="contact-us">
		
		<h1>CONTACT US</h1>
		
		<div className="footer-contact-panel">
		
			<div className="footer-contact-item">
		
				<a href="https://github.com/pochhhhh" target="_blank"><img src=""/><i class="fa fa-phone fa-4x"></i></a>

					<a href="https://github.com/pochhhhh" target="_blank"><h2>Call Us</h2></a>
		
						</div>
	
		
			<div className="footer-contact-item">
		
				<a href="https://github.com/pochhhhh" target="_blank"><img src=""/><i class="fa fa-envelope fa-4x"></i></a>
		
					<a href="https://github.com/pochhhhh" target="_blank"><h2>Email us</h2></a>
		
						</div>
		
		
			<div className="footer-contact-item">
		
				<a href="https://github.com/pochhhhh" target="_blank"><img src=""/><i class="fa fa-eye fa-4x"></i></a>

					<a href="https://github.com/pochhhhh" target="_blank"><h2>Visit Us</h2></a>
		
						</div>
						
			</div>
		
		
		
		<div className="footer-signature">
		
		<div className="footer-caption">
		
		<div className="footer-logo"><img src={require("./logo.png")}/></div>
		
		
					
			<div className="social-media-panel"> 
			
				<a href="https://github.com/pochhhhh" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
				<a href="https://github.com/pochhhhh" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
				<a href="https://github.com/pochhhhh" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
				<a href="https://github.com/pochhhhh" target="_blank"><i class="fa fa-youtube fa-2x"></i></a>
			
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