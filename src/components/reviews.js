import React from "react";

class Reviews extends React.Component{
	
constructor(props){
	
	super(props);
	
	this.state = {
	
	currentReview: 1,
	reviews: [
	"Awesome review 1",
	"Awesome review 2", 
	"Awesome review 3", 
	"Awesome review 4"]
	
	}
	
	
}

	render(){
		
		return(
	<div className="Reviews">
	
	<h1>REVIEWS</h1>
	
	
	<div className="review-message">
	
	<p>This restaurant is awesome! This restaurant is awesome! This restaurant is awesome! This restaurant is awesome! This restaurant is awesome! This restaurant is awesome! This restaurant is awesome!</p>
	
	</div>

	<h3>Read all reviews</h3>
			
			
			<div className="review-button-panel">
			
			<div className="review-button">
			<i class="fa fa-chevron-left fa-4x"></i>
			</div>
			
			<div className="review-button">
			<i class="fa fa-chevron-right fa-4x"></i>
			</div>

			</div>
	

	</div>

		
		
		);
		
		
		
	}
	
	
	
	
}

export default Reviews;

