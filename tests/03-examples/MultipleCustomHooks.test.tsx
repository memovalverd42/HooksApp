import React from "react";
import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

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

});