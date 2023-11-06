import { FC } from "react"
import { Todo } from "../types/todo.types"
import { TodoItem } from "./TodoItem"

interface TodoListProps {
    todos: Todo[];
  }

export const TodoList: FC<TodoListProps> = ({ todos }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}
