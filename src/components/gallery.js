import React from "react";

let currentIndex = 0;
const colours = ["blue", "yellow", "green", "red", "pink", "gold"];

/*

- I'm going to create an array of image links called imageLinks
- I will make first and default image shown imageLinks[0]
- I will create gallery left button to decrease imageLinks index - 1
- I will create gallery right button to increase imageLinks index + 1
- When clicking gallery left button, if the current index of imageLinks is already 0, then do nothing or change imageLinks
index to imageLinks.length
- Add image animation after, upon left button click, new image will fade in from right
- Add image animation after, upon right button click, new image will fade in from left

 */

 
class Gallery extends React.Component{
	
	constructor(props){
		
		super(props);
		
		this.state = {
			
			 background:colours[currentIndex]
			
		}
		
	}
	
	galleryButtonLeft = () => {
		
		if(currentIndex === 0){
			
			currentIndex = colours.length - 1;
			
			this.setState({
					
					background: colours[currentIndex]
					
				})		
			
		} else {
	
		currentIndex = currentIndex - 1;
		
		this.setState({
					
					background: colours[currentIndex]
					
				})
				
		}	
	
	}
	
	galleryButtonRight = () => {

		currentIndex = currentIndex + 1;
		
		if(currentIndex <6){
				
				this.setState({
					
					background: colours[currentIndex]
					
				})
				
		} else {
			
			currentIndex = 0;
			
			this.setState({
					
				background: colours[currentIndex]
					
				})
		}
		
	}
	
	render(){
		
		return(
		
		<div className="Gallery" style={this.state}>
		
		
		<div className="gallery-button-panel">
		
		<div className="gallery-button gallery-button-left" onClick={this.galleryButtonLeft}></div>
		<div className="gallery-button gallery-button-right" onClick={this.galleryButtonRight}></div>
		
		
		</div>
		
		
		</div>
		
		);
		
	}
	
}


export default Gallery;