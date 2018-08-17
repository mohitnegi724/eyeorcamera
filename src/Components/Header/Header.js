import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header=(props)=>{
	return(
			<div className="Header">
				<div id="Menu">
					<img src="https://res.cloudinary.com/eyeorcamera/image/upload/v1534507012/menu.png" onClick={props.toggleSidebar} id="MenuIcon" alt="Menu"/>
				</div>
				<div id="Logo">
					<Link to="/"><p>Eye Or Camera</p></Link>
				</div>
			</div>
		)
}
export default Header