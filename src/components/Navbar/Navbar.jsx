import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { useStateContext } from "../../context/StateContext";

import Cart from "../Cart/Cart";
import { images } from "../../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { showCart, toggleIsOpen } = useStateContext();

	return (
		<header>
			<nav className='app__navbar'>
				{/* Burger menu */}
				<div className='app__navbar-menu '>
					<div
						className='app__flex'
						onClick={() => {
							setToggle(true);
							if (showCart === true) return toggleIsOpen();
						}}
					>
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
										whileInView={{ x: [-250, 0], opacity: 1 }}
										exit={{ x: -260, opacity: 1, transition: { duration: 0.5 } }}
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
									<span className='navbar__link-underline'></span>
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
		</header>
	);
};

export default Navbar;
