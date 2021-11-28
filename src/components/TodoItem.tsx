import React from 'react';
import { Todo } from '../models';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, todos, setTodos}: Props) => {
	return (
  <form className="todo-item">
    <span className="todo-item-text" {todo.todo}></span>
    <div>
      <span className="icon">
      <AiFillEdit />
      </span>
      <span className="icon"></span>
      <span className="icon"></span>
    </div>
  </form>
  )
};

export default TodoItem;
