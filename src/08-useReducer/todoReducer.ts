import { Actions, Todo } from "../types/todo.types";

export const todoReducer = ( initialState: Todo[], action: Actions ) => {

    switch ( action.type ) {
        case 'add':
            throw new Error('action.type = add no está implementada');
    
        default:
            return initialState;
    }

}