import React, { useState, useContext, createContext, useReducer } from "react";

import { connect } from "react-redux";

// const MyContext = createContext({
// 	value: "",
// 	setvalue: () => {},
// });

// const InputModule = ({ addNewTodo }) => {
// 	// const { value, setvalue } = useContext(MyContext);
// 	const add = (setvalue, value) => {
// 		//operation
// 		setvalue(value);
// 	};
// 	return (
// 		<MyContext.Consumer>
// 			{({ value, setvalue }) => (

// 			)}
// 		</MyContext.Consumer>
// 	);
// };

const reducerFn = (state, action) => {
	switch (action.type) {
		case "CHANGE_VALUE":
			return action.value;

		default:
			return state;
	}
};

function App(props) {
	const { todos, addNewTodo } = props;
	// const [value, setvalue] = useState("");

	const [value, disptach] = useReducer(reducerFn, "");
	return (
		<div className='App'>
			<h1>Hello Todo</h1>
			<div>
				<input
					value={value}
					onChange={(e) =>
						disptach({ type: "CHANGE_VALUE", value: e.target.value })
					}
				/>
				<button
					onClick={() => {
						addNewTodo(value);
						disptach({ type: "CHANGE_VALUE", value: "" });
					}}>
					Onclick
				</button>
			</div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

const mapStateToProps = (store) => {
	return {
		todos: store,
		age: "783287",
	};
};

const mapDisptachToProps = (dispatch) => {
	return {
		addNewTodo: (value) => dispatch({ type: "ADD_TODO", value }),
		num: "fghjkl",
	};
};

export default connect(mapStateToProps, mapDisptachToProps)(App);
