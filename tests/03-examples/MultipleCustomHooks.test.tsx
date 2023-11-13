import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
// Solucion 1:
// jest.mock('../../src/hooks/useCounter', () => ({
//     ...jest.requireActual('../../src/hooks/useCounter'), // Si quieres mantener la implementación real
//     useCounter: jest.fn(() => ({ counter: 1 })), // O proporciona tu propia implementación
// }))

interface Data {
    image: string | undefined;
    name: string | undefined;
}

interface ReturnValue {
    data: Data | null;
    isLoading: boolean;
    hasError: any
}

const loadedData: ReturnValue = {
    data: {image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', name: 'Rick Sanchez'},
    isLoading: false,
    hasError: null
}

describe('pruebas en <MultipleCustomHooks />', () => {

    // Esto es debido a que el mock sustituye al useCounter original, por lo que
    // se debe de crear la implementacion a nivel de todas las pruebas
    const mockIncrement = jest.fn();
    ( useCounter as jest.Mock ).mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })
    
    test('debe de mostrar el componente por defecto', () => {

        ( useFetch as jest.Mock ).mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render( <MultipleCustomHooks /> );
        
        expect( screen.getByText( 'Loading...' ) ).toBeTruthy();
        expect( screen.getByText( 'Rick and Morty Characters' ) );
        
        const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next character' });
        
        expect( nextButton.disabled ).toBeTruthy();
        
        // screen.debug();
        
    });
    
    test('debe de mostrar una imagen', () => {
        
        ( useFetch as jest.Mock ).mockReturnValue(loadedData);
        
        render( <MultipleCustomHooks /> );
        
        const imageElement = screen.getByRole<HTMLImageElement>( 'img' );
        const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next character' });
        
        expect( imageElement.src ).toBe( loadedData.data?.image );
        expect( screen.getByText( loadedData.data?.name! ) ).toBeTruthy();
        expect( nextButton.disabled ).toBeFalsy();
        
        // screen.debug();
        
    });
    
    test('debe de llamar a la funcion de increment()', () => {

        ( useFetch as jest.Mock ).mockReturnValue(loadedData);
        
        render( <MultipleCustomHooks /> );
        
        const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next character' });

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

});