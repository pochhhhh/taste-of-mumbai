import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Gallery from "./components/gallery";
import Menu from "./components/menu";
import Body from "./components/body";
import Sidebar from "./components/sidebar";
import Reviews from "./components/reviews";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
      <div className="App">
	  
	  <Navbar />
	  
	  	  <Gallery />
	  
	  <Header />
	  
	  <Sidebar />
	  
	  <Menu />
	  
	  <Body />
	  
	  <Reviews />

	  <Footer />
	  
	  
	  
	
	  
	  
      </div>
    );
  }
}

export default App;
