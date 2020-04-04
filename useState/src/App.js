import React, { useState } from "react"
import "./App.scss"
import ColorBox from "./components/ColorBox"
import TodoList from "./components/TodoList";

function App() {
	const [todoList, setTodoList] = useState([
		{id: 1, title: 'I love Javascript'},
		{id: 2, title: 'We love ReactJS'},
		{id: 3, title: 'They love NodeJS'}
	]);

	function handleTodoClick(todo) {
		console.log(todo);
		const index = todoList.findIndex(x => x.id === todo.id);
		if (index < 0) return;

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	}

	return (
		<div className="app">
			<h1>React Hooks</h1>
			<TodoList todos={todoList} onTodoClick={handleTodoClick} />
			<ColorBox />
		</div>
	)
}

export default App
