import React from 'react';
import Home from './../Home/Home';
import Gallery from './../Gallery/Gallery';
import Contact from './../Contact/Contact';
import About from './../About/About';
import {Switch, Route} from 'react-router-dom';

const MainContainer=()=>{
	return(
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/gallery" component={Gallery}></Route>
			<Route exact path="/contact" component={Contact}></Route>
			<Route exact path="/about" component={About}></Route>
		</Switch>
		)
}

export default MainContainer;