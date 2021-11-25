import React from 'react';
import './styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
	return (
		<form className='input'>
			<input
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Declare an objective'
				className='input-field'
			/>
			<button className='input-btn' type='submit'>
				Accept
			</button>
		</form>
	);
};

export default InputField;
