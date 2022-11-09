import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);

	let foundProduct;

	// let index;

	const productData = {
		title: "Fall limited edition sneakers",
		id: "1a2b3c",
		price: 125,
	};

	const onAdd = () => {
		// const checkProductInCart = cartItems.find((item) => item._id === product._id);
		setCartItems((prevCartItems) => prevCartItems + 1);
		// setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		// setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
	};

	const onRemove = () => {
		setCartItems((prevCartItems) => prevCartItems - prevCartItems);
		// foundProduct = cartItems.find((item) => item._id === product._id);
		// const newCartItems = cartItems.filter((item) => item._id !== product._id);

		// setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
		// setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
	};

	const toggleCartItemQuantity = (id, val) => {
		foundProduct = cartItems.find((item) => item._id === id);
		// index = cartItems.findIndex((product) => product._id === id);
		const newCartItems = cartItems.filter((item) => item._id !== id);

		if (val === "inc") {
			setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
			// react rule-breaking!!!!!!!!!! no manual mutation
			// foundProduct.quantity += 1;
			// cartItems[index] = foundProduct;
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		} else if (val === "dec") {
			if (foundProduct.quantity > 1) {
				setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
			}
		}
	};

	const incQty = () => {
		setQty((prevQty) => prevQty + 1);
	};
	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;
			return prevQty - 1;
		});
	};

	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				incQty,
				decQty,
				onAdd,
				toggleCartItemQuantity,
				onRemove,
				setCartItems,
				setTotalPrice,
				setTotalQuantities,
				productData,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
