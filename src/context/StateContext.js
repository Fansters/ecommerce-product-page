import React, { createContext, useContext, useState } from "react";
import { images } from "../constants";

const Context = createContext();

export const StateContext = ({ children }) => {
	let [index, setIndex] = useState(0);
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState(0);
	const [qty, setQty] = useState(1);

	let cartQty = qty;

	const productData = {
		title: "Fall limited edition sneakers",
		img: images.product1T,
		price: 125,
	};

	const toggleIsOpen = () => {
		setShowCart(!showCart);
	};

	const onAdd = () => {
		setCartItems((prevCartItems) => prevCartItems + cartQty);
	};

	const onRemove = () => {
		setCartItems((prevCartItems) => prevCartItems - prevCartItems);
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
				index,
				setIndex,
				showCart,
				setShowCart,
				cartItems,
				setCartItems,
				qty,
				cartQty,
				incQty,
				decQty,
				onAdd,
				onRemove,
				productData,
				toggleIsOpen,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
