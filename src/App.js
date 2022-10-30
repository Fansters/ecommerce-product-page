import React from "react";

import { Product } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
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
);

export default App;
