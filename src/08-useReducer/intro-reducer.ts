
interface Todo {
    id: number,
    todo: string,
    done: boolean
}

interface Action {
    type: string,
    payload: Todo
}

const initialState: Todo[] = [{
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false
}];

const todoReducer = (state = initialState, action?: Action) => {

    if(action?.type === '[TODO] Add') {
        return [...state, action.payload];
    }    


    return state;
    
}

const newTodo: Todo = {
    id: 2,
    todo: 'Nose',
    done: false
}

const addTodoAction: Action = {
    type: '[TODO] Add',
    payload: newTodo
}

let todos = todoReducer();

todos = todoReducer( todos, addTodoAction );
console.log(todos);


