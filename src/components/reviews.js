import React from "react";

const reviewInfo = {
	
	name: [
	"Bob Smith", 
	"John Doe", 
	"Plain Jane",
	"Juliana Lopez",
	"Mohammed Max",
	"Jane Mao",
	"Andrew Sharif",
	"Jack The Muncher",
	"Gordon Bamsay",
	
	],
	
	comment: [
	"What a wonderful way to enjoy Indian food! My wife and I were really impressed by the wonderful customer service! Would definitely go back again!", 
	"I like this restaurant! The food is incredibly satisfying and made me full within minutes!", 
	"Delicious food, with wonderful customer service to boot!",
	"10/10 would come here again, lovely authentic atmosphere!",
	"Yummy!",
	"My kids say that the chicken korma was the best they ever had!",
	"If you're gonna eat here, you better make sure your stomach is empty - Be prepared to be full very quickly!",
	"Yum Yum!",
	"Food so strong it makes me cry!",]

}

let currentIndex = 0;

class Reviews extends React.Component{
	
	constructor(props){
	
	super(props);
	
	this.state = {
	
	currentReview: 1,
	name: reviewInfo.name[currentIndex],
	comment: reviewInfo.comment[currentIndex]

	}
	
}

reviewButtonLeft = () => {
	
	if(currentIndex === 0){
		
		currentIndex = reviewInfo.name.length - 1;
		
		this.setState({
	
		name: reviewInfo.name[currentIndex],
		comment: reviewInfo.comment[currentIndex]	
		
		});
		
	} else {
		
		currentIndex--;
		
		this.setState({
	
		name: reviewInfo.name[currentIndex],
		comment: reviewInfo.comment[currentIndex]
		
	});
		
		
	}
	
	
}

reviewButtonRight = () => {
	
	
	if(currentIndex === reviewInfo.name.length - 1){
		
	currentIndex = 0;
	
	this.setState({
	
		name: reviewInfo.name[currentIndex],
		comment: reviewInfo.comment[currentIndex]
		
	});
		
		
	} else {
		
		currentIndex++;
		
		this.setState({
	
		name: reviewInfo.name[currentIndex],
		comment: reviewInfo.comment[currentIndex]
		
	});
	
	}
	

	
}

	render(){
		
		return(
	<div className="Reviews" id="review-section">
	
	<h1>REVIEWS</h1>
	
	
	<div className="review-message">
	
	

<h3>{this.state.name}</h3>
	
	<p><i class="fa fa-quote-left"></i>
	{this.state.comment}
	<i class="fa fa-quote-right"></i></p>
	
	</div>

	{/*<h3>Read all reviews</h3>*/}
			
			
			<div className="review-button-panel">
			
			<div className="review-button" onClick={this.reviewButtonLeft}>
			<i class="fa fa-chevron-left fa-4x"></i>
			</div>
			
	<div className="review-button" onClick={this.reviewButtonRight}>
			<i class="fa fa-chevron-right fa-4x"></i>
			</div>

			</div>
	

	</div>

		
		
		);
		
		
		
	}
	
	
	
	
}

export default Reviews;

