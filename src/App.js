import React from "react";

import { Product } from "./components";
import { Navbar } from "./components";
import "./App.css";

import { StateContext } from "./context/StateContext";

const App = () => (
	<StateContext>
		<div className='app'>
			<Navbar />
			<Product />
			<footer>
				<div className='attribution'>
					Coded by <br />
					<a href='https://www.frontendmentor.io/profile/Fansters'>Fansters</a>
				</div>
			</footer>
		</div>
	</StateContext>
);

export default App;
