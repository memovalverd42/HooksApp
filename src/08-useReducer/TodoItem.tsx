import { FC } from "react";
import { Todo } from "../types/todo.types";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.todo}</span>
      <button className="btn btn-danger m-2">Borrar</button>
    </li>
  );
};
