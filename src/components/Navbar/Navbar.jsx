import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { images } from "../../constants";
import { useStateContext } from "../../context/StateContext";
import "./Navbar.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { productData, cartItems, onRemove, showCart, toggleIsOpen } = useStateContext();

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
			<div className='app__cta-btns'>
				<div className='app__cta-cart'>
					<button type='button' onClick={toggleIsOpen}>
						<AnimatePresence>
							{cartItems > 0 && (
								<motion.span
									key='cartQty'
									initial={{ opacity: 0 }}
									animate={{ y: [-5, 0], opacity: 1 }}
									transition={{ duration: 0.3 }}
									exit={{ y: -5, opacity: 0 }}
									className='cart-item-qty'
								>
									{cartItems}
								</motion.span>
							)}
						</AnimatePresence>
						<img src={images.cartIcon} alt='cart' />
					</button>
					<AnimatePresence>
						{showCart && (
							<motion.div
								key='wholeCart'
								initial={{ opacity: 0 }}
								whileInView={{ y: [-40, 0], opacity: 1 }}
								transition={{ duration: 0.4 }}
								exit={{ y: -20, opacity: 0 }}
								className='app__cart-info'
							>
								<div className='app__cart-title'>
									<p className='app__cart-heading'>Cart</p>
								</div>
								<div className='app__cart-items'>
									<div className='app__cart-items-cont'>
										<AnimatePresence>
											{cartItems < 1 && (
												<motion.div
													key='cartEmpty'
													initial={{ opacity: 0 }}
													whileInView={{ y: [-15, 0], opacity: 1 }}
													transition={{ duration: 0.3, delay: 0.2 }}
													exit={{ y: -10, opacity: 0, transition: { delay: 1.2 } }}
													className='empty-cart'
												>
													Your cart is empty.
												</motion.div>
											)}
										</AnimatePresence>
										{cartItems >= 1 && (
											<div className='item-in-cart'>
												<div className='item-img-cont'>
													<img className='item-img' src={productData.img} alt='shoe thumbnail' />
												</div>
												<div className='item-desc'>
													<h3 className='item-title'>{productData.title}</h3>
													<div className='item-price-cont'>
														<span className='total-qty'>
															${productData.price.toFixed(2)} x {cartItems}
															{"  "}
														</span>
														<span className='total-price'> ${(productData.price * cartItems).toFixed(2)}</span>
													</div>
												</div>
												<button type='button' className='item-delete' onClick={onRemove}>
													<img src={images.deleteIcon} alt='delete' />
												</button>
											</div>
										)}
										{cartItems >= 1 && (
											<button type='button' className='in-cart-btn'>
												Checkout
											</button>
										)}
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
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
