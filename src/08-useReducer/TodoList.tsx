import { FC } from "react"
import { Todo } from "../types/todo.types"
import { TodoItem } from "./TodoItem"

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: ( id: number ) => void;
    onToggleTodo: ( id: number ) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleTodo }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={ onDeleteTodo }
                        onToggleTodo={ onToggleTodo }
                    />
                ))
            }
        </ul>
    )
}
