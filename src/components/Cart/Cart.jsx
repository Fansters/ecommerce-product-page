import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useStateContext } from "../../context/StateContext";
import { images } from "../../constants";
import "./Cart.css";

const Cart = () => {
	const { productData, cartItems, onRemove, showCart, toggleIsOpen } = useStateContext();

	return (
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
						exit={{ y: -20, opacity: 0, transition: { delay: 0.2 } }}
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
											transition={{ duration: 0.2, delay: 0.4 }}
											exit={{ y: 15, opacity: 0, transition: { delay: 0 } }}
											className='empty-cart'
										>
											Your cart is empty.
										</motion.div>
									)}
								</AnimatePresence>
								<AnimatePresence>
									{cartItems >= 1 && (
										<motion.div
											initial={{ opacity: 0 }}
											whileInView={{ y: [-20, 0], opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.3 }}
											exit={{ y: 20, opacity: 0, transition: { delay: 0 } }}
											className='item-in-cart'
										>
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
										</motion.div>
									)}
								</AnimatePresence>
								<AnimatePresence>
									{cartItems >= 1 && (
										<motion.button
											initial={{ opacity: 0 }}
											whileInView={{ y: [-20, 0], opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.3 }}
											exit={{ y: 20, opacity: 0, transition: { delay: 0 } }}
											type='button'
											className='in-cart-btn'
										>
											Checkout
										</motion.button>
									)}
								</AnimatePresence>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Cart;
