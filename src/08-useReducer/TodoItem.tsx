import { FC } from "react";
import { Todo } from "../types/todo.types";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: ( id: number ) => void;
  onToggleTodo: ( id: number ) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onDeleteTodo, onToggleTodo }) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }`}
        onClick={ () => onToggleTodo( todo.id ) }
        aria-label="span"
      >
        {todo.todo}
      </span>
      <button 
        className="btn btn-danger m-2" 
        onClick={ () => onDeleteTodo( todo.id ) }
      >
        Borrar
      </button>
    </li>
  );
  
};
