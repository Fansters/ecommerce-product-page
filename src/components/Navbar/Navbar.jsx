import React from "react";
import { useState } from "react";

import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='app__navbar'>
			{/* Burger menu */}
			<div className='app__navbar-menu '>
				<div className='app__flex' onClick={() => setToggle(true)}>
					<img src={images.menuIcon} alt='menu' />
				</div>
				<div className='app__logo app__logo-mobile'>
					<a href='/'>sneakers</a>
				</div>
				{toggle && (
					<>
						<div className='app__black-bg' onClick={() => setToggle(false)}>
							<div className='app__menu-container'>
								<div onClick={() => setToggle(false)}>
									<img src={images.closeIcon} alt='close' />
								</div>
								<ul>
									{["collections", "men", "women", "about", "contact"].map((item) => (
										<li key={item}>
											<a href={`#${item}`} onClick={() => setToggle(false)}>
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</>
				)}
			</div>
			{/* Desktop menu */}
			<div className='app__logo-menu-cont'>
				<div className='app__logo'>
					<a href='/'>sneakers</a>
				</div>
				<div className='app__menu'>
					<ul className='app__navbar-links'>
						{["collections", "men", "women", "about", "contact"].map((item) => (
							<li className='app__flex p-text' key={`link-${item}`}>
								<a className={`navLink-${item}`} href={`#${item}`}>
									{item}
								</a>
								<div id='navbar__divv' />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='app__cta-btns'>
				<div className='app__cta-cart'>
					<a href='/'>
						<img src={images.cartIcon} alt='cart' />
					</a>
				</div>
				<div className='app__cta-avatar'>
					<a href='/'>
						<img src={images.avatar} alt='avatar' />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
