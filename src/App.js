import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import MainContainer from './Components/MainContainer/MainContainer';
import './App.css';

export default class App extends Component {
	state={
		showSidebar: false
	}
	toggleSidebarHandler=()=>{
		this.setState({showSidebar: true});
	}
  HideSideBarHandler=()=>{
   this.setState({showSidebar: false});
   document.querySelector('.Sidebar').classList.add("Sidebar");
  }
  render() {
    return (
      <div className="container">
      	<Header toggleSidebar={this.toggleSidebarHandler}/>
        {this.state.showSidebar ? <div><Sidebar HideSideBar={this.HideSideBarHandler}/></div>:null}
        <MainContainer/>
      </div>
    );
  }
}

