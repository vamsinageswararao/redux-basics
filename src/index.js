import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./App";

import { createStore } from "redux";

const reducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TODO":
			const { value } = action;
			return state.concat([value]);
		default:
			return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App name={"Ashik"} />
	</Provider>,
	document.getElementById("root"),
);
