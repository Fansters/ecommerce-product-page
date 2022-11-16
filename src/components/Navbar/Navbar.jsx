import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Cart from "../Cart/Cart";
import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='app__navbar'>
			{/* Burger menu */}
			<div className='app__navbar-menu '>
				<div className='app__flex' onClick={() => setToggle(true)}>
					<button type='button'>
						<img src={images.menuIcon} alt='menu' />
					</button>
				</div>
				<div className='app__logo app__logo-mobile'>
					<a href='/'>sneakers</a>
				</div>

				<AnimatePresence>
					{toggle && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='app__black-bg'
								// onClick={() => setToggle(false)}
							>
								<motion.div
									whileInView={{ x: [-260, 0], opacity: 1 }}
									exit={{ x: [0, -260], opacity: 1 }}
									className='app__menu-container'
								>
									<div onClick={() => setToggle(false)}>
										<button type='button'>
											<img src={images.closeIcon} alt='close' />
										</button>
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
								</motion.div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
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
			{/* navbar cart & user */}
			<div className='app__cta-btns'>
				<Cart />
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
