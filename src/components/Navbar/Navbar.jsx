import React from "react";

import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-cont'>
				<div className='app__logo-menu-cont'>
					<div className='app__logo'>sneakers</div>
					<div className='app__menu'>
						<ul className='app__navbar-links'>
							{["collections", "men", "women", "about", "contact"].map((item) => (
								<li className='app__flex p-text' key={`link-${item}`}>
									<a className={`navLink-${item}`} href={`#${item}`}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='app__cta-btns'>
					<div className='app__cta-cart'>
						<img src={images.cartIcon} alt='cart' />
					</div>
					<div className='app__cta-avatar'>
						<img src={images.avatar} alt='avatar' />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
