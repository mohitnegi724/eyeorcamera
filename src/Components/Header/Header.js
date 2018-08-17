import React from 'react';
import './Header.css';
const Header=(props)=>{
	return(
			<div className="Header">
				<div id="Menu">
					<img 
					alt="Menu"
					src="https://res.cloudinary.com/eyeorcamera/image/upload/v1534442648/menu.png"
					onClick={props.toggleSidebar}
					id="MenuIcon"/>
				</div>
				<div id="Logo">
					<p>Eye Or Camera</p>
				</div>
			</div>
		)
}
export default Header