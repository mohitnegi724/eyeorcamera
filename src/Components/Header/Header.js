import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header=(props)=>{
	return(
			<div className="Header">
				<div id="Menu">
					<img src="https://res.cloudinary.com/eyeorcamera/image/upload/v1534574546/Menu.png" onClick={props.toggleSidebar} onClick={()=>{document.querySelector('.Sidebar').classList.add("yo")}} id="MenuIcon" alt="Menu"/>
				</div>
				<div id="Logo">
					<Link to="/"><p>Eye Or Camera</p></Link>
				</div>
			</div>
		)
}
export default Header