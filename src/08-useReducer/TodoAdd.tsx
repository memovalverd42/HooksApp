import { FC } from "react";
import { useForm } from "../hooks";

interface TodoDescription {
    todo: string
}

interface TodoAddProps {
    onNewTodo: ({todo}: Todo) => void
}


export const TodoAdd: FC<TodoAddProps> = ({ onNewTodo }) => {

    const { onInputChange, todo, onResetForm } = useForm<TodoDescription>({todo: ''});

    const onFormSubmit = ( event: SubmitEvent ) => {
        event.preventDefault();
        if( todo.length <= 1 ) return;

        const newTodo: Todo = {
            id: new Date().getTime(),
            todo: todo,
            done: false
        }

        onNewTodo(newTodo);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="todo"
                value={ todo }
                onChange={ onInputChange }
            />

            <button 
                type="submit" 
                className="btn btn-outline-primary mt-3"
            >
                Agregar
            </button>
        </form>
    );
};
