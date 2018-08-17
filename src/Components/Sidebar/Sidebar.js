import React from 'react'; 
import './Sidebar.css';
import {NavLink} from 'react-router-dom';

const Sidebar=(props)=>{
	return(
		<div className="Sidebar">
			<div className="SidebarTop">
				<div id="closeMenu">
				<i className="material-icons" onClick={props.HideSideBar}>
					keyboard_backspace
				</i>
				</div>
			</div>
			<div className="Options">
				<nav>
						<p onClick={props.HideSideBar}><NavLink to="/">Home</NavLink></p>
						<p onClick={props.HideSideBar}><NavLink to="/gallery">Gallery</NavLink></p>
						<p onClick={props.HideSideBar}><NavLink to="/contact">Contact</NavLink></p>
						<p onClick={props.HideSideBar}><NavLink to="/about">About</NavLink></p>
				</nav>
			</div>
			<div className="socialMedia">
				<ul>
					<li>
						<i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
					</li>
					<li>
						<i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
					</li>
					<li>
						<i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
					</li>
				</ul>
			</div>
		</div>
		)
}

export default Sidebar;