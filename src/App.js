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
		introShowing: true,
		showMenu: false,
		introText: "Taste of Mumbai welcomes you to enjoy traditional Mumbai cuisine, with a twist of indo Chinese, Punjabi and Gujarati dishes. We use fresh ingredients and the finest of herbs & spices. Mumbai Junction is a great place to bring your family and friends, with a fantastic family atmosphere, all ages are welcome as we cater for all"
			
		}

		this.toggleMenu = this.toggleMenu.bind(this);
		
	}
	
	toggleMenu(){
		
		if(this.state.introShowing){
			
			this.setState({
			
			introShowing: false,
			showMenu: true
			
			});
		
		} else  {
			
			this.setState({
			
			introShowing: true,
			showMenu: false
			
			});		
			
		}
		
	}
	

  render() {
	  
    return (
	
	<div className="App">
	  
	<Navbar />
	  
	<Gallery />
	  
	<Body 
	introShowing={this.state.introShowing} 
	toggleMenu = {this.toggleMenu} 
	companyName = {this.state.companyName} 
	introText={this.state.introText}
	/>
	  
	<StaticImages />
	  
	<Reviews />

	<Footer />
	  
    </div>
	  );
  }
}

export default App;
