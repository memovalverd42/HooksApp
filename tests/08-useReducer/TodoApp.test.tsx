import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe('Pruebas sobre el componente <TodoApp />', () => {

    ( useTodo as jest.Mock ).mockReturnValue({
        todos:  [
            {id: 1, todo: 'Lavar toallas', done: false},
            {id: 2, todo: 'Pagar tarjeta de credito', done: true},
        ],
        totalTodosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });
    
    test('debe de mostrar el componente correctamente', () => {
        
        render(<TodoApp />);
        
        expect( screen.getByText('Lavar toallas') ).toBeTruthy();
        expect( screen.getByText('Pagar tarjeta de credito') ).toBeTruthy();

    });

});