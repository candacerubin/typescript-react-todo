import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');

	console.log(todo);

	return (
		<div className='App'>
			<span className='heading'>Mission Objectives</span>
			<InputField todo={todo} setTodo={setTodo} />
		</div>
	);
};

export default App;
