import React from "react";
import { useState, useRef } from "react";

import { images } from "../../constants";
import { useStateContext } from "../../context/StateContext";
import "./Navbar.css";

const Navbar = () => {
	const cartRef = useRef();
	const [toggle, setToggle] = useState(false);
	const { productData, totalPrice, totalQuantities, cartItems, showCart, setShowCart } = useStateContext();

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
					<button type='button' onClick={() => setShowCart(true)}>
						{totalQuantities > 0 && <span className='cart-item-qty'>{totalQuantities}</span>}
						<img src={images.cartIcon} alt='cart' />
					</button>
					{showCart && (
						<div className='app__cart-info' ref={cartRef} onClick={() => setShowCart(false)}>
							<div className='app__cart-title'>
								<p className='app__cart-heading'>Cart</p>
							</div>
							<div className='app__cart-items'>
								<div className='app__cart-items-cont'>
									{cartItems.length < 1 && <div className='empty-cart'>Your cart is empty.</div>}
									{cartItems.length >= 1 && (
										<div className='item-in-cart'>
											<div className='item-img-cont'>
												<img className='item-img' src={images.product1T} alt='shoe thumbnail' />
											</div>
											<div className='item-desc'>
												<h3 className='item-title'>Full Limited Edition Sneakers</h3>
												<div className='item-price-cont'>
													<span className='total-qty'>
														${productData.price} x {cartItems.length}{" "}
													</span>
													<span className='total-price'>${(productData.price * cartItems.length).toFixed(2)}</span>
												</div>
											</div>
											<button type='button' className='item-delete'>
												<img src={images.deleteIcon} alt='delete' />
											</button>
										</div>
									)}
									{cartItems.length >= 1 && (
										<button type='button' className='in-cart-btn'>
											Checkout
										</button>
									)}
								</div>
							</div>
						</div>
					)}
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
