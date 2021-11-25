import React, { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import './App.css';
import { Todo } from './models';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleOnSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
		}
		setTodo('');
	};

	console.log(todos);

	return (
		<div className='App'>
			<span className='heading'>Mission Objectives</span>
			<InputField
				todo={todo}
				setTodo={setTodo}
				handleOnSubmit={handleOnSubmit}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
