import React, { Component } from 'react';
import logo from './logo.svg';
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

	  <h1>Main h1 header, temporary placeholder</h1>
	  
	  <Navbar />
	  
	  	  <Gallery />
	  
	  <Header />
	  

	  
	  
	  
	  
	
	  
	  
      </div>
    );
  }
}

export default App;
