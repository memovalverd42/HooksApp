import { Actions, Todo } from '../../src/types/todo.types';
import { todoReducer } from '../../src/08-useReducer/todoReducer';

const initialState: Todo[] = [
    {
        id: 1,
        todo: 'Bañar al perro',
        done: false,
    },
]

describe('Pruebas en todoReducer()', () => {
    
    test('debe de regresar el estado inicial', () => {
        
        const newState = todoReducer( initialState, {} as Actions );

        expect( newState ).toBe( initialState );

    });

    test('debe de agregar un Todo', () => {
        
        const action: Actions = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                todo: 'Pagar la luz',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });

    test('debe de eliminar un TODO de state', () => {
    
        const action: Actions = {
            type: '[TODO] Delete Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect( newState.length ).toBe(0);

    });

    test('debe de cambiar el estado del done de un todo', () => {

        const action: Actions = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect( newState[0].done ).toBeTruthy();

    });

});