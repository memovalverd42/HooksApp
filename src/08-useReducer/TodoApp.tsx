import { useReducer } from "react"
import { Todo } from '../types/todo.types';
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from ".";

const initialState: Todo[] = [
    {
        id: new Date().getTime(),
        todo: 'Lavar el tinaco',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Destapar el drenaje',
        done: false
    },
]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleNewTodo = ( { todo }: Todo ) => {
        console.log({todo});
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>


        </>
    );

}
