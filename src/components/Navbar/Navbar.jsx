import React from "react";
import { useState } from "react";

import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-cont'>
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
			</div>

			{/* Burger menu */}
			<div className='app__navbar-menu'>
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<div whileInView={{ x: [400, 0] }} transition={{ duration: 0.85, ease: "easeInOut" }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{["home", "about", "work", "skills", "contact"].map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
