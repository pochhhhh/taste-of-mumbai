import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Body from "./components/body";
import StaticImages from "./components/staticimages";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import "./style.css";


class App extends Component {
	
		constructor(props){
		
		super(props);
		
		this.state = {
		
		companyName: "TASTE OF MUMBAI",
		currentBodyDisplay: "Intro",
		introText: "Taste of Mumbai welcomes you to enjoy traditional Mumbai cuisine, with a twist of indo Chinese, Punjabi and Gujarati dishes. We use fresh ingredients and the finest of herbs & spices. Mumbai Junction is a great place to bring your family and friends, with a fantastic family atmosphere, all ages are welcome as we cater for all"
			
		}

		this.showMenu = this.showMenu.bind(this);
	}
	
		showMenu = (subsection) => {
		
		this.setState({
			
			currentBodyDisplay: subsection
			
		});
		
	}
	
render() {
	  
    return (
	
	<div className="App">
	  
	<Navbar />
	  
	<Gallery />
	  
	<Body 
	companyName = {this.state.companyName} 
	introText = {this.state.introText}
	currentBodyDisplay = {this.state.currentBodyDisplay}
	showMenu = {this.showMenu}
	/>
	  
	<StaticImages />
	  
	<Reviews />

	<Footer />
	  
    </div>
	  );
  }
}



export default App;
