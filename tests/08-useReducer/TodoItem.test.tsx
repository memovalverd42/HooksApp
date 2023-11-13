import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Todo } from "../../src/types/todo.types";
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas de componente <TodoItem />', () => {

    const todo: Todo = {
        id: 1,
        todo: 'Terminar los tests',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostar el Todo Pendiente de completar', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            /> 
        );
        
        const liElement = screen.getByRole<HTMLLIElement>('listitem');
        const spanElement = screen.getByLabelText<HTMLSpanElement>( 'span' );

        expect( liElement.className ).toBe( "list-group-item d-flex justify-content-between" );
        expect( spanElement.className ).toBe( 'align-self-center ' );

        // screen.debug();
        
    });    
    
    test('debe de ejecutar el todo completado', () => {

        todo.done = true;
        
        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            /> 
        );
        
        const spanElement = screen.getByLabelText<HTMLSpanElement>( 'span' );
        
        expect( spanElement.className ).toBe( 'align-self-center text-decoration-line-through' );
        
        // screen.debug();
        
    });
    
    test('debe de llmarse el onToggleTodo', () => {
        
        render( 
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            /> 
        );
        
        const spanElement = screen.getByLabelText<HTMLSpanElement>( 'span' );
        
        expect( spanElement.className ).toBe( 'align-self-center text-decoration-line-through' );
        
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('debe de llmarse el onDeleteTodo', () => {
        
        render( 
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            /> 
        );
        
        const buttonElement = screen.getByRole<HTMLButtonElement>('button');
        
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });

});