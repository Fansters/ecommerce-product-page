import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState(0);
	const [qty, setQty] = useState(1);

	let cartQty = qty;

	const productData = {
		title: "Fall limited edition sneakers",
		price: 125,
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
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
