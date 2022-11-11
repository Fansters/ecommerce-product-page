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
				{toggle && (
					<>
						<div className='app__black-bg' onClick={() => setToggle(false)}>
							<div className='app__menu-container'>
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
					<button type='button' onClick={toggleIsOpen}>
						{cartItems > 0 && <span className='cart-item-qty'>{cartItems}</span>}
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
								// onMouseLeave={() => setShowCart(false)}
							>
								<div className='app__cart-title'>
									<p className='app__cart-heading'>Cart</p>
								</div>
								<div className='app__cart-items'>
									<motion.div
										key='cartCont'
										initial={{ x: -20, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.4 }}
										className='app__cart-items-cont'
									>
										{cartItems < 1 && <div className='empty-cart'>Your cart is empty.</div>}
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
									</motion.div>
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
