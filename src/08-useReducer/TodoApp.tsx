
import { TodoList } from "./TodoList";
import { TodoAdd } from ".";
import { useTodo } from "../hooks";


export const TodoApp = () => {

    const { 
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo ,
        pendingTodosCount,
        totalTodosCount,
    } = useTodo();

    return (
        <>
            <h1>TodoApp: { totalTodosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
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
