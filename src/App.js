import React from "react";

import { Product } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
	<div className='app'>
		<Navbar />
		<Product />
	</div>
);

export default App;
