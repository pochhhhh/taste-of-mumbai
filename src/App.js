import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Intro from "./components/intro";
import Gallery from "./components/gallery";
import Sidebar from "./components/sidebar";
import Menu from "./components/menu";
import Body from "./components/body";
import StaticImages from "./components/staticimages";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import "./style.css";


class App extends Component {
	
		constructor(props){
		
		super(props);
		
		this.state = {
			
		showIntro: true,
		stateMessage: "State accessed",
		houseNumber: 540
			
		}
		
	}


  render() {
	  
    return (
      <div className="App">
	  
	  <Navbar />
	  
	  <Gallery />
	  
	  <Body showState={this.state.stateMessage}/>
	  
	  <StaticImages />
	  
	  <Reviews />

	  <Footer />
	  
      </div>
    );
  }
}

export default App;
