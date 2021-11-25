import React, { useRef } from 'react';
import './styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleOnSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleOnSubmit }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleOnSubmit(e);
				inputRef.current?.blur();
			}}>
			<input
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Declare an objective'
				className='input-field'
				ref={inputRef}
			/>
			<button className='input-btn' type='submit'>
				Accept
			</button>
		</form>
	);
};

export default InputField;
